"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Minimize2,
  User,
  Mail,
  Loader2,
  Phone,
  ArrowRight,
  CircleStop,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type VisitorProfile = {
  name: string;
  phone: string;
  email: string;
};

type OnboardingErrors = Partial<Record<keyof VisitorProfile, string>>;

const QUICK_PROMPTS = [
  "What are Ayushi's top skills?",
  "Tell me about her IBM internship",
  "How can I contact her?",
  "What certifications does she have?",
];

const STORAGE_KEYS = {
  activeSession: "dhruv_active_session",
} as const;

type ActiveSession = {
  sessionId: string;
  profile: VisitorProfile;
  messages: Message[];
  onboardingComplete: boolean;
  leadSaved: boolean;
};

const EMPTY_PROFILE: VisitorProfile = {
  name: "",
  phone: "",
  email: "",
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function loadActiveSession(): ActiveSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.activeSession);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ActiveSession;
    if (
      parsed.onboardingComplete &&
      parsed.profile?.name &&
      parsed.profile?.phone &&
      parsed.profile?.email &&
      parsed.sessionId
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function saveActiveSession(session: ActiveSession) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEYS.activeSession, JSON.stringify(session));
}

function clearActiveSession() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEYS.activeSession);
  // Remove legacy keys from earlier versions
  localStorage.removeItem("dhruv_session_id");
  localStorage.removeItem("dhruv_visitor_profile");
  localStorage.removeItem("dhruv_lead_saved");
}

function validateProfile(profile: VisitorProfile): OnboardingErrors {
  const errors: OnboardingErrors = {};

  if (!profile.name.trim()) {
    errors.name = "Name is required";
  } else if (profile.name.trim().length < 2) {
    errors.name = "At least 2 characters";
  }

  const digits = profile.phone.replace(/\D/g, "");
  if (!profile.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid 10–15 digit number";
  }

  if (!profile.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  return errors;
}

function welcomeMessage(name: string): Message {
  return {
    id: "welcome",
    role: "assistant",
    content: `Hi ${name.split(" ")[0]}! I'm Dhruv, Ayushi's AI assistant. Ask me about her education, skills, internships, certifications, or how to get in touch — I'm here to help.`,
  };
}

export function DhruvAssistant() {
  const [open, setOpen] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [profile, setProfile] = useState<VisitorProfile>(EMPTY_PROFILE);
  const [onboardingErrors, setOnboardingErrors] = useState<OnboardingErrors>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [submittingOnboarding, setSubmittingOnboarding] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const resetForNewUser = useCallback(() => {
    clearActiveSession();
    setOpen(false);
    setOnboardingComplete(false);
    setProfile(EMPTY_PROFILE);
    setMessages([]);
    setInput("");
    setLoading(false);
    setSubmittingOnboarding(false);
    setLeadSaved(false);
    setOnboardingErrors({});
    setSessionId("");
  }, []);

  useEffect(() => {
    ["dhruv_session_id", "dhruv_visitor_profile", "dhruv_lead_saved"].forEach((key) =>
      localStorage.removeItem(key)
    );

    const active = loadActiveSession();
    if (active) {
      setSessionId(active.sessionId);
      setProfile(active.profile);
      setMessages(active.messages);
      setOnboardingComplete(true);
      setLeadSaved(active.leadSaved ?? false);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, onboardingComplete]);

  useEffect(() => {
    if (open && onboardingComplete) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else if (open && !onboardingComplete) {
      setTimeout(() => nameRef.current?.focus(), 300);
    }
  }, [open, onboardingComplete]);

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateProfile(profile);
    setOnboardingErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const trimmed: VisitorProfile = {
      name: profile.name.trim(),
      phone: profile.phone.trim(),
      email: profile.email.trim(),
    };

    const newSessionId = createId();
    setSubmittingOnboarding(true);
    setOnboardingErrors({});

    try {
      const response = await fetch("/api/chat/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: newSessionId,
          fullName: trimmed.name,
          phoneNumber: trimmed.phone,
          emailId: trimmed.email,
        }),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Could not save your details");
      }
    } catch (error) {
      setOnboardingErrors({
        email:
          error instanceof Error
            ? error.message
            : "Could not save your details. Please try again.",
      });
      setSubmittingOnboarding(false);
      return;
    }

    const initialMessages = [welcomeMessage(trimmed.name)];

    setProfile(trimmed);
    setSessionId(newSessionId);
    setOnboardingComplete(true);
    setLeadSaved(true);
    setMessages(initialMessages);
    setSubmittingOnboarding(false);

    saveActiveSession({
      sessionId: newSessionId,
      profile: trimmed,
      messages: initialMessages,
      onboardingComplete: true,
      leadSaved: true,
    });
  };

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading || !onboardingComplete) return;

      const userMessage: Message = { id: createId(), role: "user", content: trimmed };
      const nextMessages = [...messages, userMessage];
      setMessages(nextMessages);
      setInput("");
      setLoading(true);

      saveActiveSession({
        sessionId,
        profile,
        messages: nextMessages,
        onboardingComplete: true,
        leadSaved,
      });

      try {
        const history = nextMessages
          .filter((m) => m.id !== "welcome")
          .map((m) => ({ role: m.role, content: m.content }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history,
            sessionId,
          }),
        });

        const data = (await response.json()) as { reply?: string; error?: string };

        if (!response.ok) {
          throw new Error(data.error ?? "Request failed");
        }

        setMessages((prev) => {
          const updated = [
            ...prev,
            {
              id: createId(),
              role: "assistant" as const,
              content: data.reply ?? "Sorry, I couldn't respond. Please try again.",
            },
          ];
          saveActiveSession({
            sessionId,
            profile,
            messages: updated,
            onboardingComplete: true,
            leadSaved,
          });
          return updated;
        });
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            content:
              "I'm having trouble connecting right now. Please try again, or reach Ayushi directly at aggarwalayushi545@gmail.com.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, leadSaved, messages, onboardingComplete, profile, sessionId]
  );

  const handleEndChat = useCallback(() => {
    if (!onboardingComplete) return;

    setMessages((prev) => [
      ...prev,
      {
        id: createId(),
        role: "assistant",
        content: "Thank you for chatting! Hope I was helpful. Have a great day!",
      },
    ]);

    setTimeout(() => resetForNewUser(), 2200);
  }, [onboardingComplete, resetForNewUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  };

  const updateProfile = (field: keyof VisitorProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    if (onboardingErrors[field]) {
      setOnboardingErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const onboardingFields: {
    key: keyof VisitorProfile;
    label: string;
    placeholder: string;
    type: string;
    icon: typeof User;
  }[] = [
    { key: "name", label: "Full Name", placeholder: "Your full name", type: "text", icon: User },
    { key: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel", icon: Phone },
    { key: "email", label: "Email ID", placeholder: "you@example.com", type: "email", icon: Mail },
  ];

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-5 z-[100] flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-gradient-to-r from-[#08102e] to-[#0d1b4b] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(16,185,129,0.35)] backdrop-blur-md transition-shadow hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] md:bottom-8 md:right-8"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open Dhruv AI Assistant"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Bot className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
            </span>
            <span className="hidden sm:inline">
              <span className="block text-[10px] font-bold tracking-widest text-emerald-400/80 uppercase">
                AI Assistant
              </span>
              <span className="font-display text-base leading-none">Dhruv</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-4 right-4 z-[100] flex w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#08102e] via-[#0d1b4b] to-[#0f2060] shadow-[0_24px_64px_rgba(0,0,0,0.55)] md:bottom-8 md:right-8"
            style={{ height: "min(560px, calc(100vh - 2rem))" }}
            initial={{ opacity: 0, scale: 0.92, y: 24, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            role="dialog"
            aria-label="Dhruv AI Assistant chat"
          >
            {/* Header */}
            <div className="relative shrink-0 border-b border-white/10 px-4 py-3.5">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-[#F59E0B]/5" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-display text-lg leading-tight text-white">Dhruv</h2>
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <p className="truncate text-[11px] text-white/45">
                    {onboardingComplete
                      ? `Chatting as ${profile.name}`
                      : "Tell us about yourself to begin"}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {onboardingComplete && (
                    <button
                      type="button"
                      onClick={handleEndChat}
                      className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-[11px] font-bold text-amber-400/90 transition-colors hover:bg-amber-500/10 hover:text-amber-300"
                      aria-label="End chat"
                      title="End chat and start fresh for next visitor"
                    >
                      <CircleStop className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">End Chat</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg p-2 text-white/40 transition-colors hover:bg-white/5 hover:text-white/70"
                    aria-label="Minimize chat"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg p-2 text-white/40 transition-colors hover:bg-white/5 hover:text-white/70"
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {!onboardingComplete ? (
              /* Pre-chat onboarding */
              <div className="flex flex-1 flex-col overflow-y-auto px-4 py-5">
                <div className="mb-5 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/25">
                    <User className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl text-white">Before we start</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                    Please share your details so Ayushi can follow up if needed.
                  </p>
                </div>

                <form onSubmit={handleStartChat} className="flex flex-1 flex-col gap-3">
                  {onboardingFields.map(({ key, label, placeholder, type, icon: Icon }) => (
                    <div key={key} className="grid gap-1">
                      <label
                        htmlFor={`dhruv-${key}`}
                        className="text-[10px] font-bold tracking-widest text-white/40 uppercase"
                      >
                        {label}
                      </label>
                      <div className="relative">
                        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                        <input
                          ref={key === "name" ? nameRef : undefined}
                          id={`dhruv-${key}`}
                          type={type}
                          value={profile[key]}
                          onChange={(e) => updateProfile(key, e.target.value)}
                          placeholder={placeholder}
                          autoComplete={
                            key === "email" ? "email" : key === "phone" ? "tel" : "name"
                          }
                          className={cn(
                            "w-full rounded-xl border bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/25 transition-colors focus:outline-none focus:ring-1",
                            onboardingErrors[key]
                              ? "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/20"
                              : "border-white/10 focus:border-emerald-500/40 focus:ring-emerald-500/20"
                          )}
                        />
                      </div>
                      {onboardingErrors[key] && (
                        <p className="text-xs text-red-400">{onboardingErrors[key]}</p>
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={submittingOnboarding}
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(16,185,129,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submittingOnboarding ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving your details…
                      </>
                    ) : (
                      <>
                        Start Chat with Dhruv
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="mt-auto pt-3 text-center text-[10px] leading-relaxed text-white/25">
                    Your details are saved to our Google Sheet when you start the chat.
                  </p>
                </form>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 scrollbar-thin">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        "flex",
                        msg.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                          msg.role === "user"
                            ? "rounded-br-md bg-emerald-500/90 text-white"
                            : "rounded-bl-md border border-white/10 bg-white/5 text-white/85"
                        )}
                      >
                        {msg.role === "assistant" && msg.id !== "welcome" && (
                          <span className="mb-1 block text-[10px] font-bold tracking-widest text-emerald-400/70 uppercase">
                            Dhruv
                          </span>
                        )}
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white/50">
                        <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                        Dhruv is thinking…
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {messages.length <= 1 && !loading && (
                  <div className="shrink-0 border-t border-white/5 px-4 py-2.5">
                    <p className="mb-2 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                      Quick questions
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {QUICK_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => void sendMessage(prompt)}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/55 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="shrink-0 border-t border-white/10 p-3"
                >
                  {leadSaved && (
                    <p className="mb-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-center text-[11px] font-semibold text-emerald-300">
                      Your details are saved in Google Sheet
                    </p>
                  )}
                  <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/5 p-2 focus-within:border-emerald-500/40 focus-within:ring-1 focus-within:ring-emerald-500/20">
                    <textarea
                      ref={inputRef}
                      rows={1}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about Ayushi's portfolio…"
                      disabled={loading}
                      className="max-h-24 min-h-[36px] flex-1 resize-none bg-transparent px-1 py-1.5 text-sm text-white placeholder:text-white/30 focus:outline-none disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || loading}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Send message"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-2 text-center text-[10px] text-white/25">
                    Powered by AI · Click End Chat when you&apos;re done
                  </p>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
