import React from 'react';
import { motion } from 'framer-motion';
import './About_us.css';

function About_us() {
  return (
    <div className="about-container">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-content"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="header-section"
        >
          <span className="company-label">ABOUT US</span>
          <h1 className="main-title">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="title-word"
            >THE</motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="title-word"
            >METAL</motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="title-word"
            >CHEF</motion.span>
          </h1>
          <div className="title-accent"></div>
          <span className="subtitle-text">Pioneering Aluminum Excellence Since 1995</span>
          <p className="header-description">
            Crafting Premium Aluminum Solutions for a Sustainable Future
          </p>
        </motion.div>
        
        <div className="content-wrapper">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="image-section"
          >
            <motion.img 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255,255,255,0.2)"
              }}
              src="/path-to-your-actual-factory-image.jpg"
              alt="Our State-of-the-Art Facility" 
              className="about-image"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-section"
          >
            <h2 className="subtitle">Our Legacy of Innovation</h2>
            <p className="description">
              At <span className="highlight">The Metal Chef</span>, we've mastered the art 
              of aluminum manufacturing through decades of innovation and expertise.
            </p>
            <p className="description">
              Our signature cuboid aluminum ingots represent the pinnacle of precision 
              engineering, combining cutting-edge technology with sustainable practices.
            </p>

            <div className="stats-container">
              {[
                { number: "25+", label: "Years of Excellence" },
                { number: "50K+", label: "Tons Annual Production" },
                { number: "99.9%", label: "Purity Achieved" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="stat-item"
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="features-section"
        >
          <h2 className="subtitle">Why Choose Us</h2>
          <div className="features-grid">
            {[
              { title: "Premium Quality", desc: "Setting new standards with industry-leading purity and precision" },
              { title: "Sustainable Practice", desc: "Committed to eco-friendly production and minimal environmental impact" },
              { title: "Custom Solutions", desc: "Tailored specifications meeting exact client requirements" },
              { title: "Global Reach", desc: "Trusted partner to industries worldwide with reliable logistics" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                }}
                className="feature-item"
              >
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mission-section">
          <h2 className="subtitle">Our Mission</h2>
          <p className="description">
            To revolutionize the aluminum industry through sustainable practices
            and cutting-edge technology, delivering premium quality products
            that exceed customer expectations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About_us;