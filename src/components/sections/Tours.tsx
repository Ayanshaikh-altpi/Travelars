import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaClock, FaUsers, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';
import mountainImage from '@/assets/mountain-adventure.jpg';
import tropicalImage from '@/assets/tropical-paradise.jpg';
import culturalImage from '@/assets/cultural-city.jpg';

const Tours = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filters = [
    { id: 'all', label: 'All Tours' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'relaxation', label: 'Relaxation' },
    { id: 'wildlife', label: 'Wildlife' }
  ];

  const priceFilters = [
    { id: 'all', label: 'All Prices' },
    { id: 'budget', label: 'Under $1000' },
    { id: 'mid', label: '$1000 - $3000' },
    { id: 'luxury', label: 'Above $3000' }
  ];

  const tours = [
    {
      id: 1,
      title: 'Alpine Adventure Trek',
      destination: 'Swiss Alps, Switzerland',
      image: mountainImage,
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 256,
      duration: '8 days',
      groupSize: '12 people',
      category: 'adventure',
      priceCategory: 'mid',
      highlights: ['Mountain Climbing', 'Scenic Views', 'Professional Guide'],
      description: 'Experience the breathtaking beauty of the Swiss Alps with our expert guides.'
    },
    {
      id: 2,
      title: 'Tropical Paradise Escape',
      destination: 'Maldives',
      image: tropicalImage,
      price: 3599,
      originalPrice: 4199,
      rating: 4.8,
      reviews: 189,
      duration: '7 days',
      groupSize: '8 people',
      category: 'relaxation',
      priceCategory: 'luxury',
      highlights: ['Private Beach', 'Water Villa', 'Spa Treatments'],
      description: 'Unwind in paradise with crystal clear waters and pristine beaches.'
    },
    {
      id: 3,
      title: 'Cultural Heritage Tour',
      destination: 'Kyoto, Japan',
      image: culturalImage,
      price: 1899,
      originalPrice: 2399,
      rating: 4.7,
      reviews: 312,
      duration: '6 days',
      groupSize: '15 people',
      category: 'cultural',
      priceCategory: 'mid',
      highlights: ['Ancient Temples', 'Tea Ceremony', 'Local Cuisine'],
      description: 'Immerse yourself in the rich cultural heritage of ancient Japan.'
    },
    {
      id: 4,
      title: 'Safari Wildlife Experience',
      destination: 'Serengeti, Tanzania',
      image: mountainImage,
      price: 2799,
      originalPrice: 3299,
      rating: 4.9,
      reviews: 145,
      duration: '10 days',
      groupSize: '10 people',
      category: 'wildlife',
      priceCategory: 'mid',
      highlights: ['Big Five Safari', 'Luxury Lodge', 'Expert Naturalist'],
      description: 'Witness the incredible wildlife migration in the heart of Africa.'
    },
    {
      id: 5,
      title: 'Northern Lights Adventure',
      destination: 'Iceland',
      image: tropicalImage,
      price: 2199,
      originalPrice: 2699,
      rating: 4.8,
      reviews: 203,
      duration: '5 days',
      groupSize: '16 people',
      category: 'adventure',
      priceCategory: 'mid',
      highlights: ['Aurora Hunting', 'Ice Caves', 'Hot Springs'],
      description: 'Chase the magical Northern Lights across Iceland\'s stunning landscapes.'
    },
    {
      id: 6,
      title: 'Mediterranean Luxury Cruise',
      destination: 'Mediterranean Sea',
      image: culturalImage,
      price: 4299,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 98,
      duration: '12 days',
      groupSize: '6 people',
      category: 'relaxation',
      priceCategory: 'luxury',
      highlights: ['Luxury Yacht', 'Private Chef', 'Multiple Destinations'],
      description: 'Sail the Mediterranean in style with our exclusive luxury cruise experience.'
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesCategory = activeFilter === 'all' || tour.category === activeFilter;
    const matchesPrice = priceRange === 'all' || tour.priceCategory === priceRange;
    return matchesCategory && matchesPrice;
  });

  return (
    <section id="tours" className="py-20 lg:py-32">
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
            Featured <span className="gradient-text">Tours</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our handpicked selection of extraordinary travel experiences, 
            each carefully crafted to create unforgettable memories and adventures.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FaFilter />
              <span className="font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-hero text-white shadow-soft'
                        : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                    }`}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>

              {/* Price Filters */}
              <div className="flex flex-wrap gap-2">
                {priceFilters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setPriceRange(filter.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      priceRange === filter.id
                        ? 'bg-gradient-sunset text-white shadow-soft'
                        : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                    }`}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tours Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-hero text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save ${tour.originalPrice - tour.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <FaMapMarkerAlt className="text-primary" />
                  {tour.destination}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-primary" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-secondary" />
                    {tour.groupSize}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(tour.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">${tour.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${tour.originalPrice}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-hero text-white px-6 py-2 rounded-lg font-medium shadow-soft hover:shadow-hover transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Load More Tours
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tours;