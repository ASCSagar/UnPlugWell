"use client";
import React, { useState, useEffect } from "react";
import { Target, Heart, Wrench, Clock } from "lucide-react";

const stats = [
  { number: "10K+", label: "Community Members" },
  { number: "500+", label: "Success Stories" },
  { number: "50+", label: "Expert Contributors" },
  { number: "15+", label: "Digital Detox Tools" },
];

const resources = [
  {
    icon: Heart,
    title: "Success Stories",
    description:
      "Real stories from individuals who have transformed their lives through digital detox.",
  },
  {
    icon: Wrench,
    title: "Expert Tips & Guides",
    description:
      "Professional guidance and strategies for managing your digital habits effectively.",
  },
  {
    icon: Clock,
    title: "Digital Detox Tools",
    description:
      "Practical tools and challenges to help you unplug and maintain a healthy balance.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to UnplugWell
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Your sanctuary for rediscovering balance in the digital age. We
              empower individuals to take control of their screen time and
              cultivate healthier, more fulfilling lives offline.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                At UnplugWell, we are passionate about helping people achieve
                harmony between their digital and real lives. Through insightful
                content, practical strategies, and inspiring stories, we guide
                our community on a journey of mindfulness, productivity, and
                self-discovery.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Mindful Technology Use
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We promote conscious and balanced engagement with digital
                      tools to enhance life without letting technology control
                      it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="Team Meeting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-600 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className={`p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <resource.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us on the Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Together, we can unplug and thrive. Start your digital detox journey
            today and rediscover the beauty of living in the present moment.
          </p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
