import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlane, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Tours', href: '#tours' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Tour Categories',
      links: [
        { name: 'Adventure Tours', href: '#' },
        { name: 'Cultural Tours', href: '#' },
        { name: 'Beach Holidays', href: '#' },
        { name: 'Mountain Expeditions', href: '#' },
        { name: 'City Breaks', href: '#' },
        { name: 'Wildlife Safaris', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Travel Insurance', href: '#' },
        { name: 'Booking Terms', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cancellation Policy', href: '#' },
        { name: 'Travel Guidelines', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: FaInstagram, label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-hero p-2 rounded-lg shadow-soft">
                  <FaPlane className="text-xl text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">WanderLust</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Your trusted travel companion for over 15 years. We create extraordinary 
                experiences that connect you with the world's most incredible destinations 
                while ensuring sustainable and meaningful travel.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <FaPhone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FaEnvelope className="text-secondary" />
                  <span>info@wanderlust.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FaMapMarkerAlt className="text-accent" />
                  <span>123 Travel Street, Adventure City, AC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-muted text-muted-foreground transition-colors duration-200 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-hero rounded-2xl p-8 mb-12 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Adventures</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new destinations, 
            exclusive deals, and travel tips from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-semibold mb-6">Trusted & Certified</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-muted p-4 rounded-lg">
              <span className="text-sm font-medium">IATA Certified</span>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <span className="text-sm font-medium">ISO 9001:2015</span>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <span className="text-sm font-medium">Travel Award 2023</span>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <span className="text-sm font-medium">Sustainable Tourism</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1">
            <span>© 2024 WanderLust. Made with</span>
            <FaHeart className="text-red-500 text-xs" />
            <span>for travelers worldwide.</span>
          </div>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Cookie Policy</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;