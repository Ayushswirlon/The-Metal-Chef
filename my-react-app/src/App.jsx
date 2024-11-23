import React from 'react';
import { motion } from 'framer-motion';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import About_us from './About_us';

function App() {
  // Example with company logos
  const companies = [
    {
      name: "MetalTech Solutions",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7dfb3d0c4ab82b7046_Logo-white.svg"
    },
    {
      name: "Precision Alloys",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d7d5b0c0d594f6f13_Logo-white.svg"
    },
    {
      name: "IndustrialForge",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d1a09c8b0c68f1377_Logo-white.svg"
    },
    {
      name: "NextGen Metals",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d6c1c8a012e06e1b1_Logo-white.svg"
    },
    {
      name: "EcoMetal Dynamics",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d7c8d708c86a91f17_Logo-white.svg"
    },
    {
      name: "AlphaCore Industries",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d1a09c868968f1376_Logo-white.svg"
    },
    {
      name: "SteelTech Pro",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d6c1c8a3d7e06e1b0_Logo-white.svg"
    },
    {
      name: "MetalWorks Global",
      logo: "https://assets.website-files.com/64060ad81a09c81fe88f0df8/64060c7d7d5b0c0d594f6f13_Logo-white.svg"
    }
  ];

  // Services data
  const services = [
    {
      title: "Aluminum Ingot Manufacturing",
      description: "Premium quality aluminum ingots with precise composition control and industry-leading purity levels.",
      icon: "🏭"  // You can replace these with proper icons
    },
    {
      title: "Scrap Collection",
      description: "Professional aluminum scrap collection service with efficient logistics and fair pricing.",
      icon: "♻️"
    },
    {
      title: "Metal Processing",
      description: "State-of-the-art processing facilities for various grades of aluminum scrap.",
      icon: "⚙️"
    },
    {
      title: "Quality Testing",
      description: "Advanced laboratory testing ensuring highest quality standards.",
      icon: "🔍"
    },
    {
      title: "Sustainable Practices",
      description: "Eco-friendly recycling processes with minimal environmental impact.",
      icon: "🌱"
    },
    {
      title: "Custom Solutions",
      description: "Tailored metal processing solutions for specific industry needs.",
      icon: "⚡️"
    }
  ];

  // Map configuration
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // You'll need to replace this with your actual API key
  });

  const mapCenter = { lat: 28.7041, lng: 77.1025 }; // Example coordinates for Delhi

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Main background with subtle gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />

      {/* Unified ambient glow */}
      <div className="fixed inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '140vw',
            height: '140vh',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Hero Section - Fixed */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100 
              }}
              className="relative inline-block"
            >
              <h1 className="text-7xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 pb-2 relative z-10">
                The Metal Chef
              </h1>
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-500 to-gray-300 opacity-10 blur-2xl rounded-full"></div>
            </motion.div>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide"
            >
              Crafting Excellence in Aluminum • Transforming Metal into Masterpieces
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-full group"
              >
                <span className="relative z-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-zinc-900 px-8 py-4 rounded-full font-semibold inline-block transition-all duration-300">
                  Discover Our Craft
                </span>
                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2"
            >
              <motion.div className="w-1 h-1 bg-gray-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
        {/* Features Section */}
        <div className="py-32 px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Ingots",
                description: "Masterfully crafted aluminum ingots that set industry benchmarks for excellence and purity"
              },
              {
                title: "Expert Recycling",
                description: "State-of-the-art aluminum scrap processing with precision and environmental consciousness"
              },
              {
                title: "Sustainable Future",
                description: "Pioneering eco-friendly practices that transform today's waste into tomorrow's resources"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2 
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30 shadow-2xl hover:border-gray-600/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Companies Section */}
        <div className="py-32 px-4">
          <div className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300"
              >
                Trusted By Industry Leaders
              </motion.h2>
            </div>

            {/* Scrolling Container */}
            <div className="relative flex overflow-x-hidden">
              <div className="animate-scroll flex space-x-16 py-8">
                {[...Array(2)].map((_, outerIndex) => (
                  <div key={outerIndex} className="flex space-x-16">
                    {companies.map((company, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center backdrop-blur-sm rounded-lg px-8 py-4 min-w-[200px] border border-gray-700/30 hover:border-gray-500/50 transition-colors duration-300"
                      >
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `data:image/svg+xml,${encodeURIComponent(`
                              <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg">
                                <text x="50%" y="50%" font-family="Arial" font-size="14" fill="white" text-anchor="middle">${company.name}</text>
                              </svg>
                            `)}`;
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-32 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300"
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30 shadow-2xl group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="py-32 px-4">
          <div className="container mx-auto px-4 py-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300"
            >
              Visit Our Facility
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
                    The Metal Chef Headquarters
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <p>123 Industrial Avenue</p>
                    <p>Sector 62, Noida</p>
                    <p>Uttar Pradesh, India 201309</p>
                    <p className="pt-4">📞 +91 98765 43210</p>
                    <p>✉️ contact@metalchef.com</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30">
                  <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
                    Operating Hours
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="h-[400px] rounded-2xl overflow-hidden border border-gray-700/30"
              >
                {isLoaded ? (
                  <GoogleMap
                    zoom={15}
                    center={mapCenter}
                    mapContainerClassName="w-full h-full"
                    options={{
                      styles: [
                        {
                          featureType: "all",
                          elementType: "geometry",
                          stylers: [{ color: "#242f3e" }]
                        },
                        {
                          featureType: "all",
                          elementType: "labels.text.stroke",
                          stylers: [{ color: "#242f3e" }]
                        },
                        {
                          featureType: "all",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#746855" }]
                        }
                        // Add more custom styles as needed
                      ]
                    }}
                  >
                    <Marker position={mapCenter} />
                  </GoogleMap>
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    Loading map...
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="py-32 px-4">
          <About_us />
        </div>
      </div>

      {/* Overlay gradient for depth */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-zinc-900/50" />
    </div>
  );
}

export default App;