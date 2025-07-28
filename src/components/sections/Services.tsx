import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlane, 
  FaHotel, 
  FaMapMarkedAlt, 
  FaCamera, 
  FaUtensils, 
  FaShieldAlt,
  FaCar,
  FaUserTie,
  FaGlobe
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaPlane,
      title: 'Flight Booking',
      description: 'Best flight deals with flexible booking options and 24/7 support.',
      features: ['Global Airlines', 'Price Matching', 'Free Cancellation', 'Seat Selection'],
      color: 'primary'
    },
    {
      icon: FaHotel,
      title: 'Accommodation',
      description: 'Handpicked hotels, resorts, and unique stays for every budget.',
      features: ['Luxury Resorts', 'Boutique Hotels', 'Local Homestays', 'Verified Reviews'],
      color: 'secondary'
    },
    {
      icon: FaUserTie,
      title: 'Expert Guides',
      description: 'Professional local guides who bring destinations to life.',
      features: ['Local Expertise', 'Multi-lingual', 'Cultural Insights', 'Safety Trained'],
      color: 'accent'
    },
    {
      icon: FaCar,
      title: 'Transportation',
      description: 'Comfortable and reliable transport options for all your needs.',
      features: ['Airport Transfers', 'Private Vehicles', 'Group Transport', 'Rental Cars'],
      color: 'primary'
    },
    {
      icon: FaUtensils,
      title: 'Culinary Tours',
      description: 'Taste authentic local cuisine with our food-focused experiences.',
      features: ['Local Restaurants', 'Cooking Classes', 'Food Markets', 'Wine Tasting'],
      color: 'secondary'
    },
    {
      icon: FaCamera,
      title: 'Photography Tours',
      description: 'Capture your memories with professional photography services.',
      features: ['Pro Photographer', 'Equipment Rental', 'Photo Editing', 'Digital Gallery'],
      color: 'accent'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your interests and budget.',
      features: ['Personal Consultation', 'Flexible Planning', 'Local Insights', '24/7 Support'],
      color: 'primary'
    },
    {
      icon: FaShieldAlt,
      title: 'Travel Insurance',
      description: 'Comprehensive travel protection for peace of mind.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Baggage Protection', 'Emergency Support'],
      color: 'secondary'
    },
    {
      icon: FaGlobe,
      title: 'Visa Services',
      description: 'Hassle-free visa processing and documentation support.',
      features: ['Visa Application', 'Document Review', 'Fast Processing', 'Expert Guidance'],
      color: 'accent'
    }
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
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From planning to execution, we provide comprehensive travel services to ensure 
            your journey is seamless, memorable, and perfectly tailored to your dreams.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              {/* Icon */}
              <div className={`${getGradientClass(service.color)} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-2xl text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 ${getGradientClass(service.color)} rounded-full`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground py-3 rounded-lg font-medium transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our streamlined process ensures your travel experience is perfectly planned 
              and executed from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Tell us about your dream destination and travel preferences.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create a personalized itinerary with the best options.'
              },
              {
                step: '03',
                title: 'Booking',
                description: 'Secure your flights, accommodation, and activities with ease.'
              },
              {
                step: '04',
                title: 'Adventure',
                description: 'Enjoy your perfectly planned journey with 24/7 support.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="opacity-90 text-sm leading-relaxed">{process.description}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our travel experts and let us craft the perfect journey for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-hero text-white px-8 py-4 rounded-xl font-semibold shadow-soft hover:shadow-hover transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;