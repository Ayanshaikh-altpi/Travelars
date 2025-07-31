import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'primary'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@Travelers.com', 'support@Travelers.com'],
      color: 'secondary'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Travel Street', 'Adventure City, AC 12345'],
      color: 'accent'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      color: 'primary'
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: '#', color: 'text-blue-600' },
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'text-blue-400' },
    { icon: FaInstagram, label: 'Instagram', href: '#', color: 'text-pink-600' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#', color: 'text-blue-700' }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-gradient-ocean';
      case 'secondary':
        return 'bg-gradient-sunset';
      case 'accent':
        return 'bg-gradient-forest';
      default:
        return 'bg-gradient-hero';
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to start your next adventure? Contact our travel experts who are 
            passionate about creating unforgettable experiences just for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Tour Booking</option>
                    <option value="custom">Custom Package</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your travel plans or questions..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-hero text-white px-8 py-4 rounded-lg font-semibold shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${getGradientClass(info.color)} p-3 rounded-lg`}>
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold mb-4">Find Us</h4>
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FaMapMarkerAlt className="text-4xl mb-2 mx-auto" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Travel Street, Adventure City</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold mb-4">Follow Our Adventures</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Follow us for daily travel inspiration, tips, and exclusive offers!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers! Here are some common questions 
              from our travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking 2-3 months in advance for the best deals and availability."
              },
              {
                question: "Do you offer group discounts?",
                answer: "Yes! Groups of 6 or more travelers receive special pricing and benefits."
              },
              {
                question: "What's included in your tour packages?",
                answer: "Our packages typically include accommodation, meals, transportation, and guided activities."
              },
              {
                question: "Do you provide travel insurance?",
                answer: "We offer comprehensive travel insurance options to protect your investment."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl"
              >
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;