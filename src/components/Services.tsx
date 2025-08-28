import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: '🌱',
      title: 'Premium Quality',
      description: 'Hand-picked coffee beans from the finest plantations in Guhundwe, ensuring exceptional quality in every cup.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery services across Rwanda and beyond, bringing fresh coffee to your doorstep.'
    },
    {
      icon: '♻️',
      title: 'Sustainable Farming',
      description: 'Environmentally conscious farming practices that support local communities and preserve our beautiful landscape.'
    },
    {
      icon: '🏆',
      title: 'Award-Winning Taste',
      description: 'Our coffee has been recognized for its exceptional flavor profile and aromatic richness.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Marie Uwimana',
      location: 'Kigali, Rwanda',
      rating: 5,
      comment: 'The best coffee I\'ve ever tasted! United Fast Services delivers exceptional quality every time. The rich flavor reminds me of home.',
      avatar: '👩🏾'
    },
    {
      name: 'Jean Baptiste',
      location: 'Rusizi, Rwanda',
      rating: 5,
      comment: 'As a local resident, I\'m proud of what United Fast Services has achieved. Their commitment to quality and community is outstanding.',
      avatar: '👨🏾'
    },
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      comment: 'I discovered this coffee through a friend and now I can\'t start my day without it. The delivery is always prompt and the quality consistent.',
      avatar: '👩🏼'
    },
    {
      name: 'David Mukamana',
      location: 'Butare, Rwanda',
      rating: 5,
      comment: 'United Fast Services supports our local farmers and produces world-class coffee. I recommend them to everyone!',
      avatar: '👨🏾'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </motion.span>
    ));
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Why Choose United Fast Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about delivering the finest coffee experience from Rwanda to the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-forest-green mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers around the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-forest-green text-white p-8 rounded-lg shadow-lg relative"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-green-200">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-green-100 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              
              <div className="absolute top-4 right-4 text-6xl text-green-600 opacity-20">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-forest-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-dark-forest transition-all duration-300 shadow-lg"
          >
            Experience Our Coffee Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
