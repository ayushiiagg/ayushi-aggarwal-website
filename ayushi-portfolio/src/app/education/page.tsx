import { GraduationCap } from "lucide-react";
import { EducationTimeline } from "@/components/EducationTimeline";
import { EducationCTA } from "@/components/EducationCTA";

export const metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">

        {/* Page header */}
        <div className="flex items-start gap-3">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-tight text-[#0D1B4B]">
              Education
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/70">
              My academic journey from schooling through Business Analytics, AI, and Data Science.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10">
          <EducationTimeline />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <EducationCTA />
        </div>
      </div>
    </div>
  );
}
