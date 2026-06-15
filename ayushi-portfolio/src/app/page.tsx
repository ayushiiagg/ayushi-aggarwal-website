import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { TechProficiency } from "@/components/TechProficiency";
import { HomeCTA } from "@/components/HomeCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <TechProficiency />
      <HomeCTA />
    </div>
  );
}
