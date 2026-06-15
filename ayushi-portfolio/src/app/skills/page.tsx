import { Sparkles } from "lucide-react";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { SkillsCTA } from "@/components/SkillsCTA";

export const metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">

        {/* Page header */}
        <div className="flex items-start gap-3">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-tight text-[#0D1B4B]">
              Skills &amp; Expertise
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/70">
              A structured view of my core competencies and toolset.
            </p>
          </div>
        </div>

        {/* Skills showcase */}
        <div className="mt-10">
          <SkillsShowcase />
        </div>

        {/* CTA */}
        <div className="mt-14">
          <SkillsCTA />
        </div>
      </div>
    </div>
  );
}
