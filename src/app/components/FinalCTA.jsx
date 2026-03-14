import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900 border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-slate-950/50 p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* subtle moving border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 opacity-20 pointer-events-none" />

          <Sparkles className="mx-auto mb-6 h-12 w-12 text-indigo-400" />
          
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start Building Real Projects
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            Join the platform that is changing how colleges approach innovation. Automate tracking, encourage originality, and build projects that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all hover:bg-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)]">
              <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-10 pointer-events-none"></span>
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-slate-800">
              Request Pilot Program
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
