'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-violet-900">
        {/* Animated Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-16 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Welcome to Digital Wellness</span>
          </div>

          {/* Heading */}
          <h1 
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Embrace the Art of
            <span className="block mt-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Digital Balance
            </span>
          </h1>

          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discover how to maintain a healthy relationship with technology while staying productive and mindful in the digital age.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link 
              href="/blog"
              className="group px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about"
              className="px-8 py-3 bg-purple-800/30 text-white rounded-full font-semibold hover:bg-purple-800/40 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-purple-200">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-purple-200">Articles Published</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">Expert Contributors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;