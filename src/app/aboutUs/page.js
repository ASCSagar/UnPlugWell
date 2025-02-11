"use client";
import { useEffect, useState } from "react";
import { Users, Target, BookOpen, ArrowRight, Share2 } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "10K+", label: "Active Readers" },
    { number: "500+", label: "Published Articles" },
    { number: "50+", label: "Expert Writers" },
    { number: "15+", label: "Awards Won" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Editor-in-Chief",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      bio: "Digital wellness expert with over 10 years of experience in mindful technology use.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Michael Chen",
      role: "Head of Content",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
      bio: "Former tech journalist turned digital wellness advocate.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Emma Davis",
      role: "Wellness Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      bio: "Certified mindfulness coach and mental health expert.",
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Empowering Digital Wellness Through Mindful Content
            </h1>
            <p
              className={`text-xl text-gray-200 mb-8 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              At Unplugwell, we're dedicated to helping you find balance in the
              digital age. Our team of experts creates thoughtful,
              research-backed content to guide your journey toward digital
              wellness.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission & Values
              </h2>
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
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Evidence-Based Content
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our articles and guides are grounded in research and
                      expert knowledge, ensuring reliable information.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Community Focus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We build a supportive community where members can share
                      experiences and learn from each other.
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Join Our Mission for Digital Wellness
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be part of a community dedicated to
            mindful technology use.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
