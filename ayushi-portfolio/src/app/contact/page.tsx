import { Metadata } from "next";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";
import { QRCodeSection } from "@/components/QRCodeSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ayushi Aggarwal — open to internships, collaborations, and opportunities in data analytics and AI.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Full-width dark hero */}
      <ContactHero />

      {/* Form + Info grid */}
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <ContactForm />
          <QRCodeSection />
        </div>
      </div>
    </div>
  );
}
