import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DhruvAssistant } from "@/components/DhruvAssistant";
import { Toaster } from "@/components/ui/sonner";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ayushi Aggarwal · Business Analytics & AI",
    template: "%s · Ayushi Aggarwal",
  },
  description:
    "Second-year BBA student specializing in Business Analytics with IBM at SRM University Delhi NCR, passionate about leveraging AI and data science to solve real-world business problems.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Ayushi Aggarwal · Business Analytics & AI",
    description:
      "Recruiter-ready portfolio for Ayushi Aggarwal — Business Analytics, Generative AI, Data Science.",
    url: siteUrl,
    siteName: "Ayushi Aggarwal",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <DhruvAssistant />
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
