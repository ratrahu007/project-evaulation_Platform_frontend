import React from "react";
import { motion } from "motion/react";

export function Vision() {
  return (
    <section className="relative py-40 overflow-hidden bg-slate-950" id="vision">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -right-[10%] h-[800px] w-[800px] rounded-full bg-gradient-to-l from-blue-500/20 to-indigo-500/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.2]"
        >
          "To make every Indian student capable of building {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            original, industry-ready
          </span>
          {" "}projects."
        </motion.p>
      </div>
    </section>
  );
}
