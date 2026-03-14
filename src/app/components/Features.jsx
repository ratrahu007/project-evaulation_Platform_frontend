import React from "react";
import { motion } from "motion/react";
import { 
  CopyX, 
  FileWarning, 
  TrendingDown, 
  ShieldAlert,
  Lightbulb,
  FolderTree,
  ListTodo,
  FileText,
  Activity,
  CheckSquare,
  Users,
  Search,
  Award,
  MessageSquare,
  FileBarChart,
  BarChart4,
  Building2,
  Database
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ProblemSection() {
  const problems = [
    { icon: CopyX, title: "Repeated Projects", desc: "Students often copy legacy projects, stifling genuine innovation and learning." },
    { icon: FileWarning, title: "Manual Evaluation", desc: "Faculty spend countless hours manually grading inconsistent documentation." },
    { icon: TrendingDown, title: "Poor Tracking", desc: "No central way to measure or encourage real innovation over semesters." },
    { icon: ShieldAlert, title: "Weak Reporting", desc: "Struggling to compile accurate data for AICTE, NAAC, or NIRF accreditation." },
  ];

  return (
    <section className="py-24 bg-slate-950 relative" id="problems">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Traditional College Projects Fail</h2>
          <p className="mt-4 text-lg text-slate-400">The current academic project ecosystem is broken, leading to wasted potential and administrative nightmares.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300 hover:border-indigo-500/30 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
                <prob.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{prob.title}</h3>
              <p className="text-sm text-slate-400">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  const steps = [
    "Idea Generation",
    "Project Structure",
    "Documentation",
    "Evaluation",
    "Innovation Report"
  ];

  return (
    <section className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden" id="solutions">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">AI-Powered Project Lifecycle</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-slate-800 hidden md:block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-500 bg-slate-950 text-xl font-bold text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)] relative">
                  {i + 1}
                  <div className="absolute inset-0 rounded-full border border-indigo-400 animate-ping opacity-20"></div>
                </div>
                <h4 className="text-center text-sm font-medium text-white whitespace-nowrap">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StudentFeatures() {
  const features = [
    { icon: Lightbulb, title: "AI Idea Generator", desc: "Discover unique, solvable problem statements tailored to your skills." },
    { icon: FolderTree, title: "Auto Folder Structure Creator", desc: "Instantly setup your codebase with best-practice boilerplate." },
    { icon: ListTodo, title: "Step-by-Step Project Guide", desc: "Break down complex projects into manageable sprints and tasks." },
    { icon: FileText, title: "Auto Documentation Generator", desc: "Generate professional reports and READMEs as you code." },
    { icon: Activity, title: "Project Progress Tracker", desc: "Visualize your journey and stay on top of deadlines effortlessly." },
  ];

  return (
    <section className="py-24 bg-slate-950" id="features-students">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">For Students</h2>
            <p className="text-slate-400 mb-8">Focus on building. Let our AI handle the setup, tracking, and documentation so you can engineer the future.</p>
            <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors">
              Explore Student Tools <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.1 } }
                }}
                className={`group p-6 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors ${i === 4 ? 'sm:col-span-2' : ''}`}
              >
                <feat.icon className="h-8 w-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-medium mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function FacultyFeatures() {
  const data = [
    { name: 'Week 1', progress: 40 },
    { name: 'Week 2', progress: 65 },
    { name: 'Week 3', progress: 85 },
    { name: 'Week 4', progress: 92 },
  ];

  return (
    <section className="py-24 bg-slate-900/30 border-y border-white/5" id="features-faculty">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">For Faculty</h2>
          <p className="mt-4 text-lg text-slate-400">Streamline evaluation, prevent plagiarism, and monitor student progress in real-time.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl border border-white/5 bg-slate-950 p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2"><Users className="h-5 w-5 text-indigo-400"/> Live Student Progress Dashboard</h3>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">Active Sprints</span>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="progress" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorProgress)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { icon: Search, title: "Duplicate Detection", desc: "AI instantly flags repeated ideas from previous batches." },
              { icon: CheckSquare, title: "Idea Approval", desc: "One-click approval workflow for student proposals." },
              { icon: Award, title: "Rubric Evaluation", desc: "Standardize grading with customizable rubrics." },
              { icon: MessageSquare, title: "Feedback System", desc: "Leave inline comments on code and reports." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors"
              >
                <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdminFeatures() {
  const chartData = [
    { name: 'CS', projects: 120, innovation: 85 },
    { name: 'IT', projects: 98, innovation: 80 },
    { name: 'EC', projects: 86, innovation: 75 },
    { name: 'EE', projects: 65, innovation: 60 },
  ];

  return (
    <section className="py-24 bg-slate-950" id="features-admin">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-medium text-white flex items-center gap-2"><BarChart4 className="h-4 w-4 text-purple-400"/> Department Performance</h3>
                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">2023-2024</span>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{ fill: '#1e293b' }}
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                    />
                    <Bar dataKey="projects" fill="#6366f1" radius={[4, 4, 0, 0]} name="Total Projects" />
                    <Bar dataKey="innovation" fill="#a855f7" radius={[4, 4, 0, 0]} name="Innovation Score" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">For Colleges & Institutions</h2>
            <p className="text-slate-400 mb-8">Automate compliance reporting and track campus-wide innovation metrics effortlessly.</p>
            
            <div className="space-y-4">
              {[
                { icon: FileBarChart, title: "AICTE / NAAC / NIRF Report Generator", desc: "One-click generation of formatted accreditation reports." },
                { icon: BarChart4, title: "Innovation Analytics Dashboard", desc: "Track YoY growth in original project creations." },
                { icon: Building2, title: "Department Performance Tracking", desc: "Compare project quality across different engineering branches." },
                { icon: Database, title: "Central Project Repository", desc: "A searchable digital library of all past institutional projects." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
