import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaHeart, FaAward, FaUsers } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Access to 500+ destinations worldwide with local expertise in every location.'
    },
    {
      icon: FaHeart,
      title: 'Passionate Team',
      description: 'Our travel experts are passionate adventurers who live and breathe exploration.'
    },
    {
      icon: FaAward,
      title: 'Award Winning',
      description: '15+ years of excellence in travel services with industry recognition.'
    },
    {
      icon: FaUsers,
      title: 'Community Driven',
      description: 'Join a community of 50,000+ travelers sharing experiences and memories.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Destinations' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            About <span className="gradient-text">Travelers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            For over 15 years, we've been crafting extraordinary travel experiences that go beyond the ordinary. 
            Our mission is to connect wanderers with the world's most incredible destinations while creating 
            sustainable and meaningful travel experiences.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-ocean p-6 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To inspire and enable transformative travel experiences that broaden perspectives, 
                create lasting memories, and foster meaningful connections between travelers and 
                the destinations they visit.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-sunset p-6 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To be the world's most trusted travel companion, making extraordinary adventures 
                accessible to everyone while preserving the beauty and culture of destinations 
                for future generations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-xl text-center hover-lift"
            >
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              These numbers represent more than statistics – they represent dreams fulfilled, 
              adventures shared, and memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">What Drives Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-ocean rounded-lg mx-auto flex items-center justify-center">
                <FaHeart className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold">Authenticity</h4>
              <p className="text-muted-foreground">
                We believe in genuine, immersive experiences that connect you with local cultures and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-sunset rounded-lg mx-auto flex items-center justify-center">
                <FaGlobe className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold">Sustainability</h4>
              <p className="text-muted-foreground">
                Committed to responsible travel that preserves destinations for future generations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-forest rounded-lg mx-auto flex items-center justify-center">
                <FaUsers className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold">Community</h4>
              <p className="text-muted-foreground">
                Building connections between travelers and fostering a global community of explorers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;