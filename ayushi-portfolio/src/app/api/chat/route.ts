import { NextRequest, NextResponse } from "next/server";
import { buildWebsiteContext, AYUSHI_SYSTEM_PROMPT } from "@/lib/website-context";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequestBody = {
  messages: ChatMessage[];
  sessionId: string;
};

function fallbackReply(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return "You can reach Ayushi at aggarwalayushi545@gmail.com or use the Contact page at /contact. She's also on LinkedIn and GitHub — links are in the site footer.";
  }
  if (q.includes("skill") || q.includes("python") || q.includes("ai")) {
    return "Ayushi's core strengths include Business Analytics, Generative AI, Data Science, and Machine Learning. She works with Python, SQL, Power BI, Tableau, TensorFlow, and GenAI tools. Visit /skills for the full breakdown.";
  }
  if (q.includes("education") || q.includes("university") || q.includes("srm")) {
    return "Ayushi is a second-year BBA student in Business Analytics (IBM collaboration) at SRM University Delhi NCR (2023–2027). She has also completed programs at BITSom (Gen & Agentic AI) and IIHub–IIT Roorkee (AI & Data Science). See /education for details.";
  }
  if (q.includes("experience") || q.includes("intern") || q.includes("ibm")) {
    return "Ayushi completed a Generative AI internship at IBM and has an upcoming Business Data Analyst summer internship at Vista Neotech. Check /experience for responsibilities and her text-to-image GenAI project on GitHub.";
  }
  if (q.includes("certif")) {
    return "Ayushi holds certifications from IBM (Generative AI), BITSom (Business Analytics with Gen & Agentic AI — Distinction), IIHub–IIT Roorkee (AI & Data Science), and Python for Data Analysis. View them at /certifications.";
  }
  if (q.includes("who") || q.includes("about") || q.includes("ayushi")) {
    return "Ayushi Aggarwal is a Business Analytics & AI student based in Delhi NCR, open to internships and full-time roles. She combines IBM-backed business analytics with hands-on Generative AI and data science experience.";
  }

  return "I'm Ayushi, your portfolio assistant. I can help with education, skills, internships, certifications, and how to get in touch. Try asking about the IBM internship, top skills, or contact details.";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequestBody;

    const { messages, sessionId } = body;

    if (!sessionId || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "sessionId and at least one message are required." },
        { status: 400 }
      );
    }

    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUserMessage?.content?.trim()) {
      return NextResponse.json({ error: "A user message is required." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    let reply: string;

    if (!apiKey) {
      reply = fallbackReply(lastUserMessage.content);
    } else {
      const websiteContext = buildWebsiteContext();

      const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
          temperature: 0.4,
          max_tokens: 600,
          messages: [
            {
              role: "system",
              content: `${AYUSHI_SYSTEM_PROMPT}\n${websiteContext}`,
            },
            ...messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
        }),
      });

      if (!aiResponse.ok) {
        console.error("[Ayushi] OpenAI error:", aiResponse.status, await aiResponse.text());
        reply = fallbackReply(lastUserMessage.content);
      } else {
        const completion = (await aiResponse.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        reply =
          completion.choices?.[0]?.message?.content?.trim() ??
          "I'm sorry, I couldn't generate a response. Please try again or visit the Contact page.";
      }
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[Ayushi] Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
