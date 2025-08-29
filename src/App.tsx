import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#228B22', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.img
            src="/logo.png"
            alt="United Fast Services"
            style={{ width: '128px', height: '128px', margin: '0 auto 16px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
          >
            United Fast Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ color: 'rgba(255,255,255,0.8)', marginTop: '8px' }}
          >
            Premium Muhari Coffee from Gihundwe, Rwanda
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '10px 20px',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <motion.img
              src="/logo.png"
              alt="United Fast Services"
              className="header-logo"
              style={{ width: '50px', height: '50px', marginRight: '12px' }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <h1 className="header-title" style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#228B22', 
                margin: 0 
              }}>
                United Fast Services
              </h1>
              <p className="header-subtitle" style={{ 
                fontSize: '12px', 
                color: '#666', 
                margin: 0 
              }}>
                Premium Muhari Coffee
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '30px' }}>
            {['Home', 'Story', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, color: '#228B22' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#333',
                  cursor: 'pointer',
                  padding: '8px 0'
                }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-nav"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              color: '#228B22',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <path d="M8 8C8 8 10 10 12 10C14 10 16 8 16 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'white',
              borderTop: '1px solid #eee',
              padding: '20px'
            }}
          >
            {['Home', 'Story', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#333',
                  cursor: 'pointer',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee'
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(rgba(34,139,34,0.9), rgba(27,94,32,0.8)), url(/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '100px 20px 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '900px' }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '24px' }}
          >
            Discover the Perfect
            <span style={{ color: '#FFD700', display: 'block' }}>Muhari Coffee</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontSize: '1.3rem', marginBottom: '20px', lineHeight: '1.6' }}
          >
            From the fertile volcanic soils of <strong>Gihundwe, Rusizi, Rwanda</strong>,
            we bring you the finest <strong>Muhari coffee</strong> - a premium blend that
            captures the essence of our beautiful highlands. Each bean is carefully
            hand-picked and processed with generations of expertise, delivering
            an unmatched flavor that coffee lovers around the world have come to treasure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              backgroundColor: 'rgba(255,215,0,0.9)',
              color: '#228B22',
              padding: '12px 24px',
              borderRadius: '25px',
              display: 'inline-block',
              marginBottom: '32px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            🤝 In Partnership with Gihanga Coffee Company
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-buttons"
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,215,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('gallery')}
              style={{
                backgroundColor: '#FFD700',
                color: '#228B22',
                padding: '16px 32px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              🍃 Taste Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '50px',
                border: '2px solid white',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              📍 Find Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#228B22', marginBottom: '48px' }}>
              The Muhari Coffee Story
            </h2>

            <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="/2.jpg"
                  alt="Muhari Coffee Beans"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ textAlign: 'left' }}
              >
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#228B22', marginBottom: '24px' }}>
                  Why Muhari Coffee is the Best
                </h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                  <strong>Muhari coffee</strong> represents the pinnacle of Rwandan coffee excellence.
                  Grown at high altitudes in the mineral-rich volcanic soils of Gihundwe,
                  our coffee beans develop a unique complexity and depth of flavor that sets them apart.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                  What makes Muhari coffee truly exceptional is our commitment to traditional
                  processing methods combined with modern quality standards. Each bean is
                  hand-selected by experienced farmers who have perfected their craft over generations.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                  The result? A coffee with bright acidity, rich body, and notes of chocolate,
                  citrus, and floral undertones that create an unforgettable tasting experience.
                  <strong>This is why Muhari coffee is simply the best.</strong>
                </p>

                <div style={{
                  backgroundColor: '#228B22',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    🤝 Strategic Partnership
                  </h4>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
                    We are proud to be in <strong>partnership with Gihanga Coffee Company</strong>,
                    combining our expertise to deliver the finest Rwandan coffee to the world.
                    Together, we ensure quality, sustainability, and excellence in every cup.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <div style={{
                    backgroundColor: '#228B22',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    🏔️ High Altitude Grown
                  </div>
                  <div style={{
                    backgroundColor: '#228B22',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    🌋 Volcanic Soil
                  </div>
                  <div style={{
                    backgroundColor: '#228B22',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    👐 Hand-Picked
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Vertical Timeline */}
      <section id="gallery" style={{
        padding: '80px 20px',
        background: 'linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(/behind.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#228B22', marginBottom: '20px' }}>
              Our Coffee Journey
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Follow the complete journey of our Muhari coffee from farm to cup
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div style={{ position: 'relative', padding: '0 20px' }}>
            {/* Center Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              backgroundColor: '#228B22',
              transform: 'translateX(-50%)',
              zIndex: 1
            }} />

            {/* Timeline Items */}
            {[
              { id: 1, title: 'Coffee Plantation', desc: 'Our lush coffee farms in Gihundwe hills' },
              { id: 2, title: 'Fresh Coffee Beans', desc: 'Hand-picked premium beans at peak ripeness' },
              { id: 3, title: 'Traditional Processing', desc: 'Time-honored processing methods' },
              { id: 4, title: 'Quality Control', desc: 'Ensuring every bean meets our standards' },
              { id: 5, title: 'Expert Roasting', desc: 'Roasting to bring out perfect flavors' },
              { id: 6, title: 'Precision Grinding', desc: 'Grinding for optimal extraction' },
              { id: 7, title: 'Brewing Mastery', desc: 'The art of brewing the perfect cup' },
              { id: 8, title: 'Final Product', desc: 'Rich, aromatic Muhari coffee' },
              { id: 9, title: 'Careful Packaging', desc: 'Preserving freshness and quality' },
              { id: 10, title: 'Local Community', desc: 'Supporting our farming community' },
              { id: 11, title: 'Sustainable Farming', desc: 'Environmentally conscious cultivation' },
              { id: 12, title: 'Coffee Culture', desc: 'Celebrating Rwanda\'s coffee heritage' },
              { id: 13, title: 'Export Quality', desc: 'Premium coffee for global markets' },
              { id: 14, title: 'United Fast Services', desc: 'Your trusted coffee partner' }
            ].map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                    y: 50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="timeline-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '60px',
                    position: 'relative'
                  }}
                >
                  {/* Timeline Dot with Image */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="timeline-dot"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      border: '4px solid #228B22',
                      boxShadow: '0 0 0 4px rgba(34,139,34,0.2)',
                      zIndex: 10,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={`/${item.id}.jpg`}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'scale(3)';
                        e.currentTarget.style.zIndex = '1000';
                        e.currentTarget.style.borderRadius = '10px';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.zIndex = '10';
                        e.currentTarget.style.borderRadius = '50%';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.zIndex = '10';
                        e.currentTarget.style.borderRadius = '50%';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.transform = 'scale(3)';
                        e.currentTarget.style.zIndex = '1000';
                        e.currentTarget.style.borderRadius = '10px';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.zIndex = '10';
                        e.currentTarget.style.borderRadius = '50%';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </motion.div>

                  {/* Content Cards */}
                  <div className="timeline-content" style={{
                    width: '40%',
                    marginLeft: isLeft ? '5%' : '55%',
                    textAlign: isLeft ? 'right' : 'left'
                  }}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.98)',
                        padding: '20px',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        backdropFilter: 'blur(15px)',
                        border: '2px solid rgba(34,139,34,0.1)',
                        position: 'relative',
                        zIndex: 5
                      }}
                    >
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#228B22',
                        marginBottom: '10px'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '10px' }}>
                        {item.desc}
                      </p>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#228B22',
                        fontWeight: 'bold',
                        padding: '5px 10px',
                        backgroundColor: 'rgba(34,139,34,0.1)',
                        borderRadius: '15px',
                        display: 'inline-block'
                      }}>
                        Step {item.id} of 14
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#228B22', marginBottom: '20px' }}>
              What Our Happy Clients Say
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Don't just take our word for it - hear from coffee lovers who have experienced the magic of Muhari coffee
            </p>
          </motion.div>

          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {[
              {
                name: 'Marie Uwimana',
                location: 'Kigali, Rwanda',
                rating: 5,
                quote: 'Muhari coffee is absolutely exceptional! The rich flavor and aroma remind me of home. United Fast Services delivers quality that exceeds expectations every single time.',
                avatar: '👩🏾‍💼'
              },
              {
                name: 'Jean Baptiste Nzeyimana',
                location: 'Rusizi, Rwanda',
                rating: 5,
                quote: 'As a local resident, I\'m incredibly proud of what United Fast Services has achieved. Their Muhari coffee represents the best of our region - pure excellence in every cup!',
                avatar: '👨🏾‍🌾'
              },
              {
                name: 'Sarah Mbabazi',
                location: 'nyamagabe, Rwanda',
                rating: 5,
                quote: 'I discovered Muhari coffee through a friend and now I can\'t start my day without it. The delivery is always prompt and the quality consistently outstanding. Simply the best!',
                avatar: '👩🏼‍💻'
              },
              {
                name: 'David Mukamana',
                location: 'Butare, Rwanda',
                rating: 5,
                quote: 'United Fast Services doesn\'t just sell coffee - they share our culture and heritage. Muhari coffee is world-class quality that makes every Rwandan proud. Highly recommended!',
                avatar: '👨🏾‍🎓'
              },
              {
                name: 'Thompson Nsabiyera',
                location: 'kigali,Rwanda',
                rating: 5,
                quote: 'The moment I tasted Muhari coffee, I knew I had found something special. The complex flavors and smooth finish make it my absolute favorite. Worth every penny!',
                avatar: '👩🏻‍🍳'
              },
              {
                name: 'Paul HABIMANA.',
                location: 'Kigali, Rwanda',
                rating: 5,
                quote: 'Muhari coffee from United Fast Services showcases the very best of Rwandan agriculture. It\'s not just coffee - it\'s a testament to our nation\'s excellence and quality.',
                avatar: '👨🏾‍💼'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="testimonial-card"
                style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  border: '2px solid #228B22'
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '20px',
                  fontSize: '40px',
                  color: '#228B22',
                  backgroundColor: 'white',
                  padding: '0 10px'
                }}>
                  "
                </div>

                {/* Stars */}
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (i * 0.1) }}
                      style={{ fontSize: '24px', color: '#FFD700', marginRight: '5px' }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#555',
                  fontStyle: 'italic',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '40px', marginRight: '15px' }}>
                    {testimonial.avatar}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#228B22',
                      margin: '0 0 5px 0'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      margin: 0
                    }}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnership Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '40px', marginBottom: '30px' }}
          >
            <div style={{
              backgroundColor: '#228B22',
              color: 'white',
              padding: '30px',
              borderRadius: '20px',
              maxWidth: '600px',
              margin: '0 auto',
              boxShadow: '0 10px 30px rgba(34,139,34,0.3)'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                🤝 Strategic Partnership
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '15px' }}>
                <strong>United Fast Services</strong> is proud to partner with <strong>Gihanga Coffee Company</strong>,
                a leading name in Rwandan coffee excellence. Together, we combine decades of expertise,
                sustainable farming practices, and a shared commitment to delivering world-class coffee.
              </p>
              <div style={{
                backgroundColor: 'rgba(255,215,0,0.2)',
                padding: '15px',
                borderRadius: '10px',
                border: '1px solid rgba(255,215,0,0.3)'
              }}>
                <p style={{ color: '#FFD700', fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>
                  "Two companies, one vision: Premium Rwandan coffee for the world"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '30px' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34,139,34,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundColor: '#228B22',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Join Our Happy Customers Today! ☕
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 20px', backgroundColor: '#228B22', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Ready to experience the finest Muhari coffee? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', color: '#228B22' }}>
                  Send Us a Message
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const phone = formData.get('phone');
                    const message = formData.get('message');

                    const subject = encodeURIComponent(`Coffee Inquiry from ${name}`);
                    const body = encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
                    );

                    window.location.href = `mailto:seandiallo@gmail.com?subject=${subject}&body=${body}`;
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: '2px solid #e0e0e0',
                      fontSize: '16px',
                      backgroundColor: '#f9f9f9',
                      color: '#333'
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: '2px solid #e0e0e0',
                      fontSize: '16px',
                      backgroundColor: '#f9f9f9',
                      color: '#333'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: '2px solid #e0e0e0',
                      fontSize: '16px',
                      backgroundColor: '#f9f9f9',
                      color: '#333'
                    }}
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: '2px solid #e0e0e0',
                      fontSize: '16px',
                      backgroundColor: '#f9f9f9',
                      color: '#333',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us about your coffee needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: '#1B5E20' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: '#228B22',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Send Message
                </motion.button>
              </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>
                Contact Information
              </h3>

              {/* Contact Details */}
              <div style={{ marginBottom: '40px' }}>
                {[
                  {
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>,
                    title: 'Email',
                    value: 'seandiallo@gmail.com',
                    link: 'mailto:seandiallo@gmail.com'
                  },
                  {
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.52 21.39 21 20.92 21C9.11 21 1 12.89 1 1.08C1 0.61 1.48 0 2.08 0H5.08C5.68 0 6.08 0.4 6.08 1C6.08 3.25 6.5 5.45 7.34 7.5C7.43 7.78 7.35 8.11 7.09 8.37L5.09 10.37C6.56 13.32 9.68 16.44 12.63 17.91L14.63 15.91C14.89 15.65 15.22 15.57 15.5 15.66C17.55 16.5 19.75 16.92 22 16.92Z" fill="currentColor"/>
                    </svg>,
                    title: 'Phone',
                    value: '0788777068',
                    link: 'tel:0788777068'
                  },
                  {
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.52 21.39 21 20.92 21C9.11 21 1 12.89 1 1.08C1 0.61 1.48 0 2.08 0H5.08C5.68 0 6.08 0.4 6.08 1C6.08 3.25 6.5 5.45 7.34 7.5C7.43 7.78 7.35 8.11 7.09 8.37L5.09 10.37C6.56 13.32 9.68 16.44 12.63 17.91L14.63 15.91C14.89 15.65 15.22 15.57 15.5 15.66C17.55 16.5 19.75 16.92 22 16.92Z" fill="currentColor"/>
                      <circle cx="18" cy="6" r="3" fill="currentColor"/>
                    </svg>,
                    title: 'International',
                    value: '+250 788 503 455',
                    link: 'tel:+250788503455'
                  },
                  {
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>,
                    title: 'Location',
                    value: 'Gihundwe, Rusizi, Rwanda',
                    link: null
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      marginBottom: '15px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      cursor: contact.link ? 'pointer' : 'default'
                    }}
                    onClick={() => contact.link && window.open(contact.link, '_blank')}
                  >
                    <div style={{ color: '#228B22', marginRight: '15px' }}>{contact.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                        {contact.title}
                      </h4>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>
                        {contact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Opening Hours */}
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '15px',
                marginBottom: '30px',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Opening Hours
                </h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {[
                    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 'bold' }}>{schedule.day}:</span>
                      <span style={{ color: 'rgba(255,255,255,0.9)' }}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div style={{
                backgroundColor: 'white',
                color: '#228B22',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px' }}>
                  Follow Us & Connect
                </h4>
                <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/+250788503455"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#25D366',
                      borderRadius: '50%',
                      textDecoration: 'none',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://instagram.com/unitedfastservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                      borderRadius: '50%',
                      textDecoration: 'none',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(225, 48, 108, 0.4)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:seandiallo@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#EA4335',
                      borderRadius: '50%',
                      textDecoration: 'none',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(234, 67, 53, 0.4)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  marginTop: '15px',
                  fontWeight: 'bold'
                }}>
                  🚀 Fast Response Guarantee - We reply within 24 hours!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1B5E20', color: 'white', padding: '60px 20px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            {/* Company Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img
                  src="/logo.png"
                  alt="United Fast Services"
                  style={{ width: '60px', height: '60px', marginRight: '15px' }}
                />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                    United Fast Services
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                    Premium Muhari Coffee
                  </p>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', marginBottom: '15px' }}>
                From the fertile volcanic soils of Gihundwe, Rusizi, Rwanda, we bring you the finest Muhari coffee.
                Experience the rich flavors that tell the story of our land and our love for exceptional coffee.
              </p>
              <div style={{
                backgroundColor: 'rgba(255,215,0,0.2)',
                padding: '10px 15px',
                borderRadius: '10px',
                marginBottom: '20px',
                border: '1px solid rgba(255,215,0,0.3)'
              }}>
                <p style={{ color: '#FFD700', fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>
                  🤝 In Partnership with Gihanga Coffee Company
                </p>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://wa.me/+250788503455" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: '24px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
                <a href="https://instagram.com/unitedfastservices" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', fontSize: '24px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="mailto:seandiallo@gmail.com" style={{ color: '#EA4335', fontSize: '24px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Home', 'Story', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255,255,255,0.8)',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        textAlign: 'left',
                        padding: '5px 0',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#FFD700'}
                      onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)'}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>Gihundwe, Rusizi, Rwanda</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.39 21 20.92 21C9.11 21 1 12.89 1 1.08C1 0.61 1.48 0 2.08 0H5.08C5.68 0 6.08 0.4 6.08 1C6.08 3.25 6.5 5.45 7.34 7.5C7.43 7.78 7.35 8.11 7.09 8.37L5.09 10.37C6.56 13.32 9.68 16.44 12.63 17.91L14.63 15.91C14.89 15.65 15.22 15.57 15.5 15.66C17.55 16.5 19.75 16.92 22 16.92Z" fill="currentColor"/>
                  </svg>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.9)' }}>0788777068</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)' }}>+250 788 503 455</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>seandiallo@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px' }}>Opening Hours</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>Mon - Fri:</span>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>8:00 AM - 6:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>Saturday:</span>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>9:00 AM - 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>Sunday:</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              © 2025 United Fast Services. All rights reserved. | Premium Muhari Coffee from Rwanda
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.9rem' }}>
              Made with ❤️ for coffee lovers worldwide
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 1000
        }}
        onClick={() => {
          const phoneNumber = '+250788503455';
          const message = encodeURIComponent('Hello United Fast Services! I\'m interested in your premium coffee products.');
          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
