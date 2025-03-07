"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  PhoneOff,
  Brain,
  Moon,
  BarChart,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      <div className="relative container mx-auto px-6 pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">Detox Your Digital Life</span>
          </div>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transform transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            Embrace the Art of
            <span className="block mt-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-x">
              Digital Free Life
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            Discover mindful tech habits, expert strategies, and practical
            guidance to free yourself from digital overwhelm while cultivating a
            more intentional relationship with technology.
          </p>
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transform transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Link
              href="/blogs"
              className="group px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-purple-800/30 text-white rounded-full font-semibold hover:bg-purple-800/40 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105"
            >
              Our Philosophy
            </Link>
          </div>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 max-w-4xl mx-auto transform transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <PhoneOff className="h-6 w-6 text-purple-200" />
              </div>
              <div className="text-xl font-bold text-white mb-2">30+</div>
              <div className="text-purple-200 text-sm">
                Digital Detox Guides
              </div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-indigo-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Moon className="h-6 w-6 text-indigo-200" />
              </div>
              <div className="text-xl font-bold text-white mb-2">500+</div>
              <div className="text-purple-200 text-sm">
                Mindful Tech Articles
              </div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-violet-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-violet-200" />
              </div>
              <div className="text-xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200 text-sm">Expert Contributors</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-pink-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-6 w-6 text-pink-200" />
              </div>
              <div className="text-xl font-bold text-white mb-2">10K+</div>
              <div className="text-purple-200 text-sm">Transformed Lives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
