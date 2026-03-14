import React from "react";
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">PIEP</span>
            </div>
            <p className="max-w-xs mb-8">
              Project Innovation & Evaluation Platform. 
              Making every Indian student capable of building original, industry-ready projects.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wider text-xs uppercase">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wider text-xs uppercase">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} PIEP Platform. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Built with React + Tailwind CSS + Motion</span>
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            <span className="text-green-400">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
