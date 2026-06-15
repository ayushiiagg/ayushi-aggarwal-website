import { Metadata } from "next";
import { CVViewer } from "@/components/CVViewer";

export const metadata: Metadata = {
  title: "CV — Ayushi Aggarwal",
  description: "Download or view the CV of Ayushi Aggarwal — Business Analytics & AI Specialist, IBM Generative AI Intern.",
};

export default function CVPage() {
  return <CVViewer />;
}
