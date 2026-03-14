import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { 
  ProblemSection, 
  WorkflowSection, 
  StudentFeatures, 
  FacultyFeatures, 
  AdminFeatures 
} from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Vision } from "./components/Vision";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WorkflowSection />
        <StudentFeatures />
        <FacultyFeatures />
        <AdminFeatures />
        <Benefits />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
