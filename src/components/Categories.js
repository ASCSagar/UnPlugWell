'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Battery, 
  Laptop, 
  Heart, 
  Users, 
  Target,
  ArrowRight,
  BookOpen
} from 'lucide-react';

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('categories-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Mental Wellness',
      icon: Brain,
      description: 'Strategies for maintaining mental health in the digital age',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
      postCount: 42,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'Digital Detox',
      icon: Battery,
      description: 'Guidelines for healthy tech breaks and digital minimalism',
      image: 'https://images.unsplash.com/photo-1599008633840-052c7f756385?w=800&auto=format&fit=crop',
      postCount: 38,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 3,
      name: 'Productivity',
      icon: Target,
      description: 'Maximize efficiency while maintaining work-life balance',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop',
      postCount: 45,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Tech Habits',
      icon: Laptop,
      description: 'Build better relationships with your digital devices',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
      postCount: 36,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 5,
      name: 'Relationships',
      icon: Users,
      description: 'Maintain meaningful connections in a virtual world',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop',
      postCount: 31,
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 6,
      name: 'Well-being',
      icon: Heart,
      description: 'Holistic approaches to digital wellness and health',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop',
      postCount: 40,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section 
      id="categories-section"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            Explore Topics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover focused content across various aspects of digital wellness
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-90`} />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full min-h-[320px] flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="flex items-center gap-1 text-white/90 text-sm">
                    <BookOpen className="h-4 w-4" />
                    {category.postCount} articles
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/90 mb-6">
                  {category.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/categories/${category.id}`}
                    className="inline-flex items-center gap-2 text-white font-medium group/link"
                  >
                    Explore Category
                    <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <div 
                  className={`absolute inset-0 bg-black/0 transition-all duration-300 ${
                    hoveredCategory === category.id ? 'bg-black/10' : ''
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;