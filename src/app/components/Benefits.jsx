import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Rocket, Clock, TrendingUp, Trophy } from "lucide-react";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / (end || 1)));
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function Benefits() {
  const stats = [
    { icon: Rocket, label: "Build original projects faster", value: 300, suffix: "%", color: "text-indigo-400", bg: "bg-indigo-500/10" },
    { icon: Clock, label: "Reduce faculty workload", value: 70, suffix: "%", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: TrendingUp, label: "Track innovation growth", value: 5, suffix: "x", isString: true, strValue: "5", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: Trophy, label: "Improve institutional ranking", value: 100, suffix: "+", color: "text-purple-400", bg: "bg-purple-500/10" },
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05)_0%,transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-slate-950 p-8 shadow-2xl hover:bg-slate-900/80 transition-all duration-500"
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <stat.icon className="h-6 w-6" />
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {stat.isString ? stat.strValue : <AnimatedNumber value={stat.value} />}
                </span>
                <span className={`text-xl font-bold ${stat.color}`}>{stat.suffix}</span>
              </div>
              
              <p className="text-sm font-medium text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
