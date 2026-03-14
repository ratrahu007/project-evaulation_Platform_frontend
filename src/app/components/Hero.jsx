import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, Bot, BarChart3, Presentation, Code } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-32">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[40%] left-1/2 h-[800px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-500/20 opacity-50 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Introducing Project Innovation & Evaluation Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]"
          >
            Build Original Projects.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Track Innovation.
            </span>
            <br />
            Automate Evaluation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed"
          >
            An AI-powered platform that helps students, faculty, and colleges manage the entire project lifecycle — from idea generation to documentation, evaluation, and innovation reporting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:bg-slate-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10">
              <Play className="h-4 w-4 text-indigo-400" />
              Explore Platform
            </button>
          </motion.div>
        </div>

        {/* Hero Visual Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-sm">
            <div className="rounded-xl border border-white/5 bg-slate-950 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              
              {/* Fake Browser/App Header */}
              <div className="flex h-12 items-center border-b border-white/5 bg-white/[0.02] px-4 gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <div className="mx-auto flex h-6 w-1/3 items-center justify-center rounded bg-slate-800/50 text-[10px] text-slate-500 border border-white/5">
                  workspace.piep.app
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                
                {/* Column 1: Progress */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-white">Project Progress</span>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${i === 1 ? 'bg-indigo-400' : 'bg-slate-700'}`} />
                          <div className="h-2 flex-1 rounded-full bg-slate-800">
                            <div className={`h-full rounded-full bg-indigo-500 ${i === 1 ? 'w-full' : i === 2 ? 'w-1/2' : 'w-1/4'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-2">
                      <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Bot className="h-5 w-5 text-purple-400" />
                      <span className="text-sm font-medium text-white">AI Idea Generator</span>
                    </div>
                    <div className="h-10 rounded bg-slate-800/50 border border-white/5 flex items-center px-3">
                      <span className="text-xs text-slate-400 typing-effect">Suggest IoT healthcare projects...</span>
                    </div>
                  </motion.div>
                </div>

                {/* Column 2: Main Workflow */}
                <div className="md:col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-6 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="text-sm font-medium text-white flex items-center gap-2">
                      <Presentation className="h-4 w-4 text-indigo-400" /> Active Workflow
                    </span>
                    <span className="text-xs rounded-full bg-green-500/20 text-green-400 px-2 py-1 border border-green-500/20">On Track</span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between mt-auto">
                    {/* Nodes and connecting line */}
                    <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                      />
                    </div>

                    {[
                      { icon: Bot, label: "Idea", active: true },
                      { icon: Presentation, label: "Plan", active: true },
                      { icon: Code, label: "Code", active: true, pulse: true },
                      { icon: CheckCircle2, label: "Eval", active: false },
                      { icon: BarChart3, label: "Report", active: false }
                    ].map((step, i) => (
                      <div key={i} className="relative flex flex-col items-center gap-2">
                        <div className={`relative flex h-10 w-10 items-center justify-center rounded-full border ${step.active ? 'border-indigo-500 bg-indigo-950 text-indigo-400' : 'border-slate-700 bg-slate-900 text-slate-500'}`}>
                          <step.icon className="h-4 w-4" />
                          {step.pulse && (
                            <span className="absolute inset-0 rounded-full border border-indigo-500 animate-ping opacity-75"></span>
                          )}
                        </div>
                        <span className={`text-[10px] ${step.active ? 'text-indigo-300' : 'text-slate-500'}`}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          {/* Floating UI elements outside the window */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-12 rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-xl backdrop-blur-md hidden md:flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Evaluation Complete</p>
              <p className="text-xs text-slate-400">Score: 92/100</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-12 rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-xl backdrop-blur-md hidden md:flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Innovation Score</p>
              <p className="text-xs text-slate-400">+15% vs average</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
