'use client';

import { GraduationCap, Code2 } from 'lucide-react';

export default function Education() {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-12 space-y-20 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-900 bg-clip-text text-transparent text-center">
        Educational Journey
      </h2>

     \
      <div data-aos="fade-right" className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-cyan-500"></div>

        {/* Timeline Dot */}
        <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full border-4 border-black z-10"></div>

        {/* Card */}
        <div data-aos="fade-right" className="ml-10 bg-[#121212] border border-zinc-800 rounded-2xl shadow-lg p-6 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-500 p-2 rounded-full">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold">Intermediate in Computer Science</h3>
            <span className="ml-auto text-sm text-gray-400">2025</span>
          </div>
          <p className="text-gray-300">
            Completed intermediate studies with focus on Computer Sciences.
          </p>
        </div>
      </div>

      {/* GIAIC - Artificial Intelligence & Computing */}
      <div data-aos="fade-right" className="relative w-full max-w-5xl border border-cyan-900 rounded-2xl p-6 bg-[#121212] shadow-xl">
        {/* Left vertical line */}
        <div className="absolute left-0 top-4 h-full w-1 bg-gradient-to-b from-purple-700 to-purple-900 rounded-full"></div>

        {/* Header */}
        <div data-aos="fade-right" className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              GIAIC - Artificial Intelligence & Computing
            </h2>
          </div>
          <span className="text-gray-400 text-sm sm:text-base">2024 - Present</span>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Advanced TypeScript */}
          <div data-aos="fade-right" className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-purple-300 p-1.5 rounded">
                <span className="text-xs font-bold text-purple-900">TS</span>
              </div>
              <h3 className="font-semibold text-lg">Advanced TypeScript</h3>
            </div>
            <p className="text-sm text-gray-300">
              Mastered TypeScript at an advanced level with practical implementations.
            </p>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
              <span>Quarter 1</span>
              <span className="bg-emerald-900 text-emerald-400 px-3 py-1 rounded-full text-xs">
                Completed
              </span>
            </div>
          </div>

          {/* Next.js Development */}
          <div  data-aos="fade-right"className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-purple-300 p-1.5 rounded">
                <span className="text-xs font-bold text-purple-900">N</span>
              </div>
              <h3 className="font-semibold text-lg">Next.js Development</h3>
            </div>
            <p className="text-sm text-gray-300">
              Comprehensive study of Next.js framework and modern web development.
            </p>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
              <span>Quarter 2</span>
              <span className="bg-emerald-900 text-emerald-400 px-3 py-1 rounded-full text-xs">
                Completed
              </span>
            </div>
          </div>

          {/* Python & Agentic AI */}
          <div data-aos="fade-right" className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-purple-300 p-1.5 rounded">
                <span className="text-xs font-bold text-purple-900">🐍</span>
              </div>
              <h3 className="font-semibold text-lg">Python & Agentic AI</h3>
            </div>
            <p className="text-sm text-gray-300">
              Currently focusing on Python and Agentic AI development.
            </p>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
              <span>Quarter 3</span>
              <span className="bg-blue-900 text-blue-400 px-3 py-1 rounded-full text-xs">
                Ongoing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

