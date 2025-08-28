import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { id: 1, image: '/1.jpg', title: 'Coffee Plantation', description: 'Our lush coffee farms in the hills of Guhundwe' },
    { id: 2, image: '/2.jpg', title: 'Fresh Coffee Beans', description: 'Hand-picked premium coffee beans at their peak' },
    { id: 3, image: '/3.jpg', title: 'Traditional Processing', description: 'Time-honored methods of coffee processing' },
    { id: 4, image: '/4.jpg', title: 'Quality Control', description: 'Ensuring every bean meets our high standards' },
    { id: 5, image: '/5.jpg', title: 'Roasting Process', description: 'Expert roasting to bring out the perfect flavor' },
    { id: 6, image: '/6.jpg', title: 'Grinding Excellence', description: 'Precision grinding for optimal extraction' },
    { id: 7, image: '/7.jpg', title: 'Brewing Mastery', description: 'The art of brewing the perfect cup' },
    { id: 8, image: '/8.jpg', title: 'Final Product', description: 'Rich, aromatic coffee ready to enjoy' },
    { id: 9, image: '/9.jpg', title: 'Packaging Care', description: 'Carefully packaged to preserve freshness' },
    { id: 10, image: '/10.jpg', title: 'Local Community', description: 'Supporting our local coffee farming community' },
    { id: 11, image: '/11.jpg', title: 'Sustainable Farming', description: 'Environmentally conscious coffee cultivation' },
    { id: 12, image: '/12.jpg', title: 'Coffee Culture', description: 'Celebrating the rich coffee culture of Rwanda' },
    { id: 13, image: '/13.jpg', title: 'Export Quality', description: 'Premium coffee ready for global markets' },
    { id: 14, image: '/14.jpg', title: 'United Fast Services', description: 'Your trusted partner in premium coffee' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Our Coffee Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the story of our coffee from the fertile hills of Rwanda to your cup. 
            Each step represents our commitment to quality and excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-forest-green h-full hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {galleryItems.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  item: GalleryItem;
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:space-x-8`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-forest-green mb-3">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
          <div className="mt-4 text-sm text-forest-green font-semibold">
            Step {item.id} of 14
          </div>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden md:flex w-2/12 justify-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-6 h-6 bg-forest-green rounded-full border-4 border-white shadow-lg z-10"
        />
      </div>

      {/* Image */}
      <div className="w-full md:w-5/12">
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">{item.title}</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
