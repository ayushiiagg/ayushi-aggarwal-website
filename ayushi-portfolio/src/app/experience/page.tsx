import { Briefcase } from "lucide-react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { OpportunityCTA } from "@/components/OpportunityCTA";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
        <div className="flex items-start gap-3">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-tight text-[#0D1B4B]">
              Experience
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/70">
              Practical impact through internships and applied AI/analytics work.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <ExperienceCard />
          <OpportunityCTA />
        </div>
      </div>
    </div>
  );
}

