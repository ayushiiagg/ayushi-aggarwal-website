# Cursor AI Prompt: Ayushi Aggarwal — Professional Portfolio Website

---

## PROJECT OVERVIEW

Build a **full, multi-page professional portfolio website** for **Ayushi Aggarwal**, a second-year BBA (Business Analytics with IBM) student at SRM University Delhi NCR, targeting data/AI/business analytics recruiters. The website should serve as a **recruiter-ready digital profile** — polished, modern, and data-forward in its aesthetic.

---

## TECH STACK

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: lucide-react (no emojis in UI)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **QR Code**: `qrcode.react` library
- **Forms**: React Hook Form + Zod validation
- **PDF/Certificate Viewer**: react-pdf or iframe viewer
- **Fonts**: Use Google Fonts — `Instrument Serif` for headings + `DM Sans` for body (NOT Inter, NOT Roboto)
- **Color Scheme**: Deep Navy (`#0D1B4B`) + White + Emerald Accent (`#10B981`) + Warm Gold (`#F59E0B`)

---

## DESIGN DIRECTION

**Aesthetic**: "Data-Driven Elegance" — think Bloomberg Terminal meets a luxury consulting firm's digital presence. Clean geometry, strong typographic hierarchy, subtle grid overlays, animated data bars and donut charts, and confident white space.

**Key Visual Principles**:
- Sticky top navigation bar with blur backdrop
- Smooth scroll between sections
- Subtle entrance animations on scroll (fade up + slide)
- Cards with hover lift + border glow (emerald)
- All CTAs are solid Navy Blue buttons with white text
- Gradient mesh background on hero (soft navy-to-white)
- Professional photo with floating badge overlays (IBM badge, SRM badge)
- QR Code rendered on the contact page linking to the live website URL

**DO NOT use**: Purple gradients, generic card layouts, Inter/Roboto fonts, stock-looking patterns, or cookie-cutter portfolio templates.

---

## PAGES & ROUTING

Create the following pages under Next.js App Router:

| Route | Page Name |
|-------|-----------|
| `/` | Home / Hero |
| `/education` | Education Timeline |
| `/experience` | Experience |
| `/skills` | Skills & Expertise |
| `/certifications` | Certifications Gallery |
| `/projects` | Projects (optional, use placeholder) |
| `/contact` | Contact + QR Code |

All pages share a **common layout** with:
- Sticky top Navbar
- Smooth animated page transitions
- Footer with quick links, social icons, and copyright

---

## PAGE-BY-PAGE SPECIFICATIONS

---

### 1. GLOBAL NAVBAR (`components/Navbar.tsx`)

```
Logo (left): "Ayushi Aggarwal" in Instrument Serif, navy
Nav Links (center): About | Education | Experience | Skills | Certifications | Contact
CTA (right): "Download Resume" button with download icon
```

- Sticky with `backdrop-blur-sm bg-white/80` on scroll
- Mobile: hamburger menu with slide-out drawer (shadcn Sheet)
- Active link highlighted with emerald underline
- Smooth scroll to sections on Home, full page routing for sub-pages

---

### 2. HOME PAGE (`app/page.tsx`)

**Hero Section**:
```
Left side (60%):
  - Status badge: "Open to Opportunities" (animated pulse dot)
  - H1: "Hi, I'm Ayushi Aggarwal" (large, Instrument Serif)
  - Subtitle: "Business Analytics & AI Student"
  - Description paragraph (see content below)
  - Skill tags row: [Generative AI] [Business Analytics] [Data Science] [Agentic AI]
  - CTA row: [Get In Touch →] [View My Journey]
  - Connect row: Email | LinkedIn | GitHub icons

Right side (40%):
  - Professional photo in a styled frame (rounded corners, border, shadow)
  - Floating badge top-right: "IBM Intern" (teal badge)
  - Floating badge bottom-left: "3+ Programs" (navy badge)
```

**Hero Description**:
> "Second-year BBA student specializing in Business Analytics with IBM at SRM University Delhi NCR, passionate about leveraging AI and data science to solve real-world business problems. Currently expanding expertise through advanced programs in Generative AI and Data Science at IIT Roorkee."

**Stats Bar** (below hero, 4 cards):
```
[📚 3+ Programs] [🏆 4+ Certifications] [💼 1 Internship] [🎓 8.5 CGPA]
```

**Technical Proficiency Section**:
```
Animated progress bars:
Python         90% ████████████████░░░░
GenAI          85% ████████████████░░░░
Analytics      88% ████████████████░░░░
ML/DL          80% ████████████████░░░░
```

---

### 3. EDUCATION PAGE (`app/education/page.tsx`)

**Page Header**: Icon + "Education" title + subtitle: "My academic journey in Business Analytics, AI, and Data Science"

**Vertical Timeline** (alternating left/right layout on desktop, single column on mobile):

**Entry 1** (Right card, Ongoing):
```
Badge: "Ongoing" (green)        CGPA: 8.5
Title: BBA with Business Analytics (IBM)
Institution: SRM University Delhi NCR
Period: 2023 – 2027 · Second Year
Description: Specializing in Business Analytics with industry 
collaboration from IBM, focusing on data-driven decision making 
and business intelligence. Curriculum includes statistics, 
Python, SQL, Tableau, Power BI, and business strategy.
```

**Entry 2** (Left card, Completed):
```
Badge: "Completed" (teal)       Grade: Distinction
Title: Business Analytics with Gen & Agentic AI
Institution: BITSom (BITS School of Management)
Description: Intensive program covering Generative AI applications 
in business, Agentic AI frameworks, LLM prompt engineering, 
and AI-driven decision making workflows.
```

**Entry 3** (Right card, In Progress):
```
Badge: "In Progress" (amber)
Title: AI and Data Science Program
Institution: IIHub – IIT Roorkee
Description: Advanced program focused on machine learning, 
deep learning, data science pipelines, and AI model development 
in partnership with IIT Roorkee's Centre of Excellence.
```

---

### 4. EXPERIENCE PAGE (`app/experience/page.tsx`)

**IBM Internship Card** (full-width, prominent):
```
Company Logo Area: "IBM" text in IBM Blue on white card
Role: Generative AI Intern
Company: IBM (International Business Machines)
Duration: [Duration] · [City, India]
Type: Internship

Key Responsibilities (bulleted):
- Worked on Generative AI projects using IBM's AI tools and platforms
- Developed and tested prompts for large language models
- Collaborated with cross-functional teams to deliver AI-driven solutions
- Contributed to business analytics workflows powered by AI
- Gained hands-on experience with Watson AI and related IBM products

Skills Used tags: [Python] [Generative AI] [Prompt Engineering] [IBM Watson] [Data Analysis]
```

Below: **"Open to Opportunities"** section — a soft CTA card saying Ayushi is actively seeking internships/roles in Business Analytics, Data Science, and AI.

---

### 5. SKILLS PAGE (`app/skills/page.tsx`)

**Core Competencies** (4 animated donut charts):
```
Business Analytics  88%
Generative AI       85%
Data Science        82%
Machine Learning    80%
```

**Skill Category Cards** (3-column grid, color-coded):

| Category | Color | Skills |
|----------|-------|--------|
| Business Analytics | Blue | Data Analysis, Business Intelligence, Statistical Analysis, Predictive Modeling, Data Visualization |
| AI & Machine Learning | Purple | Generative AI, Agentic AI, Machine Learning, Deep Learning, Natural Language Processing |
| Tools & Technologies | Teal | Python, R, SQL, TensorFlow, PyTorch, Power BI, Tableau, Excel |
| Frameworks & Libraries | Green | Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, LangChain |
| Soft Skills | Amber | Problem Solving, Analytical Thinking, Communication, Teamwork, Adaptability |

---

### 6. CERTIFICATIONS PAGE (`app/certifications/page.tsx`)

**Layout**: Masonry/grid gallery of certificate cards (3 columns on desktop, 2 on tablet, 1 on mobile)

**Each Certificate Card**:
```
- Certificate thumbnail image (or placeholder with icon)
- Certificate Name (bold)
- Issuing Organization
- Date Issued
- [View Certificate] button → opens full-screen modal with PDF/image viewer
- [Download] icon button
```

**Placeholder Certificates to Show**:
1. IBM Generative AI Certificate
2. BITSom Business Analytics with Gen & Agentic AI — Distinction
3. IIT Roorkee IIHub AI & Data Science Certificate
4. Any additional courses (Python, Data Analysis, etc.)

**Add Certificate Button** (admin-only toggle — use a simple hidden `/admin` route or environment flag):
- Upload form: Certificate Name, Issuer, Date, Upload Image/PDF
- Saves to `public/certificates/` folder (static upload method)
- Shows confirmation toast

**Note in code comments**: 
```
// STATIC UPLOAD METHOD:
// To add a new certificate, place the file in /public/certificates/
// and add an entry to /data/certificates.ts
// This is the simpler approach — no backend required.
```

---

### 7. CONTACT PAGE (`app/contact/page.tsx`)

**Left Side — Contact Form**:
```
Fields:
  - Full Name (text input)
  - Email Address (email input)
  - Subject (text input)
  - Message (textarea, 5 rows)
  - [Send Message →] button

Validation: React Hook Form + Zod
On Submit: Show success toast "Message sent! I'll get back to you soon."
(Wire to EmailJS or Formspree for actual email delivery)
```

**Right Side — Info + QR Code**:
```
Contact Details:
  - 📧 Email: ayushiaggarwal@email.com (placeholder)
  - 🔗 LinkedIn: linkedin.com/in/ayushiaggarwal
  - 🐙 GitHub: github.com/ayushiaggarwal
  - 📍 Location: Delhi NCR, India

QR Code Section:
  - Label: "Scan to Visit Portfolio"
  - Generated QR code linking to: https://ayushiaggarwal.vercel.app (placeholder URL)
  - [Download QR Code] button
  - Sub-text: "Share this QR code with recruiters for instant access"
```

**QR Code Implementation**:
```tsx
import QRCode from 'qrcode.react';

<QRCode 
  value="https://ayushiaggarwal.vercel.app" 
  size={200}
  fgColor="#0D1B4B"
  bgColor="#ffffff"
  level="H"
  includeMargin={true}
/>
```

---

### 8. FOOTER (`components/Footer.tsx`)

```
Left: Logo + tagline "Business Analytics & AI Student"
Center: Quick links (Home, Education, Skills, Certifications, Contact)
Right: Social icons (Email, LinkedIn, GitHub)
Bottom bar: "© 2025 Ayushi Aggarwal · Built with Next.js" | "Open to Opportunities"
```

---

## DATA FILES

Create `/data/` folder with TypeScript data files:

**`/data/education.ts`**:
```ts
export const education = [
  {
    id: 1,
    status: 'ongoing',
    degree: 'BBA with Business Analytics (IBM)',
    institution: 'SRM University Delhi NCR',
    period: '2023 – 2027',
    year: 'Second Year',
    cgpa: '8.5',
    description: '...',
  },
  // ...
]
```

**`/data/certificates.ts`**:
```ts
export const certificates = [
  {
    id: 1,
    name: 'IBM Generative AI Fundamentals',
    issuer: 'IBM',
    date: '2024',
    image: '/certificates/ibm-genai.jpg',
    pdf: '/certificates/ibm-genai.pdf',
  },
  // ...
]
```

**`/data/skills.ts`** — all skill categories and proficiency levels.

**`/data/experience.ts`** — IBM internship details.

---

## ANIMATIONS & INTERACTIONS

```
1. Page load: Staggered fade-up for hero elements (0ms, 100ms, 200ms, 300ms delays)
2. Scroll reveal: useInView from Framer Motion — elements animate in as user scrolls
3. Progress bars: Animated fill on scroll into view
4. Donut charts: Animated stroke-dashoffset on mount
5. Card hover: translateY(-4px) + box-shadow increase + border glow
6. Nav: Background blur appears after 50px scroll
7. Button hover: Slight scale(1.02) + background shift
8. Certificate modal: Smooth fade + scale-in overlay
```

---

## FOLDER STRUCTURE

```
ayushi-portfolio/
├── app/
│   ├── layout.tsx          (global layout with Navbar + Footer)
│   ├── page.tsx            (Home)
│   ├── education/page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   ├── certifications/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── StatsBar.tsx
│   ├── TechProficiency.tsx
│   ├── EducationTimeline.tsx
│   ├── CertificateCard.tsx
│   ├── CertificateModal.tsx
│   ├── SkillCard.tsx
│   ├── DonutChart.tsx
│   ├── ContactForm.tsx
│   └── QRCodeSection.tsx
├── data/
│   ├── education.ts
│   ├── certificates.ts
│   ├── skills.ts
│   └── experience.ts
├── public/
│   ├── profile-photo.jpg   (replace with actual photo)
│   └── certificates/       (place certificate files here)
├── tailwind.config.ts
└── next.config.ts
```

---

## ADDITIONAL REQUIREMENTS

1. **Responsive**: Fully mobile-first responsive — tested at 375px, 768px, 1280px, 1440px
2. **SEO**: Add `metadata` in `layout.tsx` — title, description, Open Graph tags
3. **Performance**: Use `next/image` for all images, lazy load certificates
4. **Accessibility**: All interactive elements have `aria-label`, focus states visible
5. **Placeholder Strategy**: Use realistic placeholder content — don't leave "[Your Name]" blanks; use Ayushi's actual details as specified above
6. **No HTML `<form>` tag** — use div-based form structure with React Hook Form
7. **Toast notifications**: shadcn/ui Toast for form success/error states
8. **Dark mode ready**: Add a theme toggle (optional stretch goal)

---

## DEPLOYMENT NOTE

Add a `vercel.json` config and instructions in README.md for deploying to Vercel. The QR Code should point to the live Vercel URL once deployed. Add a placeholder URL `https://ayushiaggarwal.vercel.app` until the domain is live.

---

## SUMMARY CHECKLIST

- [ ] Navbar with all page links + Resume download CTA
- [ ] Hero section with profile photo, badges, stats
- [ ] Technical proficiency animated bars
- [ ] Education timeline (SRM + BITSom + IIT Roorkee)
- [ ] IBM Internship experience card
- [ ] Skills section with donut charts + category cards
- [ ] Certifications gallery with modal viewer + download
- [ ] Contact form with validation + toast
- [ ] QR Code section with download option
- [ ] Footer with social links
- [ ] Framer Motion scroll animations throughout
- [ ] Fully responsive (mobile + tablet + desktop)
- [ ] TypeScript types for all data
- [ ] SEO metadata
