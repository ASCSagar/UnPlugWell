'use client';

import { useState, useEffect } from 'react';
import { Mail, CheckCircle, XCircle, Sparkles, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('newsletter-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const benefits = [
    "Weekly digital wellness tips",
    "Exclusive mindfulness resources",
    "Early access to new articles",
    "Monthly wellness challenges"
  ];

  return (
    <section 
      id="newsletter-section" 
      className="relative py-20 overflow-hidden"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Join Our Community
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Weekly Digital Wellness Insights
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive expert tips on maintaining digital balance 
              and mindful technology use.
            </p>
          </div>

          {/* Form */}
          <div 
            className={`max-w-lg mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form 
              onSubmit={handleSubmit}
              className="relative flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-300 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            <div className="mt-4 text-center">
              {status === 'success' && (
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <XCircle className="h-5 w-5" />
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div 
            className={`mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center gap-3 text-purple-100"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-purple-300" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Privacy Note */}
          <p 
            className={`mt-8 text-center text-sm text-purple-200/80 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;