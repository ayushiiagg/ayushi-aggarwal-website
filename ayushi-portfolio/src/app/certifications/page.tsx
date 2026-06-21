import { Award } from "lucide-react";
import { CertificationsGallery } from "@/components/CertificationsGallery";
import { CertificationsSidebar } from "@/components/CertificationsSidebar";
import { CertificationsCTA } from "@/components/CertificationsCTA";

export const metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
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

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <CertificationsSidebar />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="mb-5 font-display text-xl text-[#0D1B4B]">Featured Certifications</h2>
            <CertificationsGallery />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <CertificationsCTA />
        </div>
      </div>
    </div>
  );
}

