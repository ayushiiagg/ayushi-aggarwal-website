"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, User, Mail, FileText, MessageSquare,
  CheckCircle2, Briefcase, GraduationCap, Handshake, Lightbulb,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email:    z.string().email("Please enter a valid email"),
  subject:  z.string().min(2, "Please select or enter a subject"),
  message:  z.string().min(10, "Please enter a message (min 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const subjectOptions = [
  { icon: Briefcase,     label: "Job / Internship Opportunity" },
  { icon: Handshake,     label: "Collaboration / Project" },
  { icon: GraduationCap, label: "Mentorship / Guidance" },
  { icon: Lightbulb,     label: "General Inquiry" },
];

const textFields = [
  { name: "fullName" as const, label: "Full Name",     type: "text",  icon: User, placeholder: "Your full name" },
  { name: "email"    as const, label: "Email Address", type: "email", icon: Mail, placeholder: "you@example.com" },
];

export function ContactForm() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", subject: "", message: "" },
    mode: "onTouched",
  });

  const messageVal = form.watch("message") ?? "";

  const onSubmit = async (_values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setTimeout(() => {
      setSubmitted(false);
      form.reset();
      setSelectedSubject("");
    }, 4000);
  };

  const pickSubject = (label: string) => {
    setSelectedSubject(label);
    form.setValue("subject", label, { shouldValidate: true });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#08102e] via-[#0d1b4b] to-[#0f2060]">

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full bg-emerald-500/15 blur-[70px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-8 bottom-0 h-[200px] w-[220px] rounded-full bg-[#F59E0B]/8 blur-[60px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="mb-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold tracking-widest text-emerald-400 uppercase">
            <Send className="h-3 w-3" />
            Send a Message
          </div>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-white">
            Let&apos;s start a conversation
          </h2>
          <p className="mt-1.5 text-sm text-white/50">
            I respond to every message — usually within 24 hours.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              >
                <CheckCircle2 className="h-8 w-8" />
              </motion.div>
              <div>
                <p className="font-display text-2xl text-white">Message Sent!</p>
                <p className="mt-1 text-sm text-white/50">I&apos;ll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="grid gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                {textFields.map((f) => {
                  const err = form.formState.errors[f.name]?.message;
                  return (
                    <div key={f.name} className="grid gap-1.5">
                      <Label htmlFor={f.name} className="text-xs font-bold uppercase tracking-widest text-white/50">
                        {f.label}
                      </Label>
                      <div className="relative">
                        <f.icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                        <Input
                          id={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          {...form.register(f.name)}
                          className={cn(
                            "pl-10 rounded-xl border-white/10 bg-white/5 text-sm text-white placeholder:text-white/25 transition-all",
                            "focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/15 focus:bg-white/8",
                            err && "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/15"
                          )}
                        />
                      </div>
                      {err && <p className="text-xs text-red-400">{err}</p>}
                    </div>
                  );
                })}
              </div>

              {/* Subject quick-pick */}
              <div className="grid gap-1.5">
                <Label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  What&apos;s this about?
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {subjectOptions.map((opt) => (
                    <motion.button
                      key={opt.label}
                      type="button"
                      onClick={() => pickSubject(opt.label)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-all duration-200",
                        selectedSubject === opt.label
                          ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-300"
                          : "border-white/10 bg-white/4 text-white/50 hover:border-white/20 hover:bg-white/8 hover:text-white/80"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <opt.icon className="h-3.5 w-3.5 shrink-0" />
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
                {/* Hidden input for subject */}
                <input type="hidden" {...form.register("subject")} />
                {form.formState.errors.subject?.message && !selectedSubject && (
                  <p className="text-xs text-red-400">{form.formState.errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="grid gap-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/50">
                    Message
                  </Label>
                  <span className={cn(
                    "text-xs tabular-nums transition-colors",
                    messageVal.length > 400 ? "text-amber-400" : "text-white/25"
                  )}>
                    {messageVal.length} / 500
                  </span>
                </div>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-white/30" />
                  <Textarea
                    id="message"
                    rows={5}
                    maxLength={500}
                    placeholder="Tell me about your project, opportunity, or question..."
                    {...form.register("message")}
                    className={cn(
                      "pl-10 rounded-xl border-white/10 bg-white/5 text-sm text-white placeholder:text-white/25 resize-none transition-all",
                      "focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/15 focus:bg-white/8",
                      form.formState.errors.message && "border-red-400/50"
                    )}
                  />
                </div>
                {form.formState.errors.message?.message && (
                  <p className="text-xs text-red-400">{form.formState.errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="button"
                onClick={form.handleSubmit(onSubmit)}
                disabled={form.formState.isSubmitting}
                className="group relative mt-1 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-[0_8px_32px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,0.60)] disabled:opacity-60"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {form.formState.isSubmitting ? (
                  <span className="relative flex items-center gap-2">
                    <motion.span
                      className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Sending…
                  </span>
                ) : (
                  <>
                    <Send className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="relative">Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
