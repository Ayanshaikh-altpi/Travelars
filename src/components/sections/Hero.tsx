import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  return (
    <section id="home"  className="relative min-h-screen flex items-center justify-center overflow-hidden pb-5 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful tropical beach destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-16 h-16 bg-gradient-ocean rounded-full" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-sunset rounded-full" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 bg-gradient-forest rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Discover Your Next
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Adventure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200"
          >
            Explore breathtaking destinations, create unforgettable memories, and embark on the journey of a lifetime with our expertly crafted travel experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-hero px-8 py-4 rounded-xl font-semibold text-lg shadow-hover hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Watch Our Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 rounded-2xl shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-300">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-300">
                  <FaCalendarAlt className="mr-2 text-secondary" />
                  Check In
                </label>
                <input
                  type="date"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-300">
                  <FaCalendarAlt className="mr-2 text-secondary" />
                  Check Out
                </label>
                <input
                  type="date"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-300">
                  <FaUsers className="mr-2 text-accent" />
                  Guests
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-gradient-hero py-4 rounded-xl font-semibold text-lg shadow-soft hover:shadow-hover transition-all duration-300"
            >
              Search Adventures
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-gray-300">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary">50K+</div>
            <div className="text-sm text-gray-300">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">1M+</div>
            <div className="text-sm text-gray-300">Memories Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">4.9</div>
            <div className="text-sm text-gray-300">Rating</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;