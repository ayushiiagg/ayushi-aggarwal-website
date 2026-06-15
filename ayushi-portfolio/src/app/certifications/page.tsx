import { Award } from "lucide-react";
import { CertificationsGallery } from "@/components/CertificationsGallery";
import { CertificationsCTA } from "@/components/CertificationsCTA";

export const metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
        <div className="flex items-start gap-3">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-tight text-[#0D1B4B]">
              Certifications
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/70">
              A curated gallery of credentials and completions.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <CertificationsGallery />
        </div>

        {/* CTA */}
        <div className="mt-14">
          <CertificationsCTA />
        </div>
      </div>
    </div>
  );
}

