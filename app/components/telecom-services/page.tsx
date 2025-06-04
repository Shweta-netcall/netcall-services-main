"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaPhoneAlt, 
  FaArrowRight, 
  FaWifi, 
  FaMobileAlt, 
  FaTv, 
  FaGlobe, 
  FaHeadset, 
  FaSignal, 
  FaMoneyBillWave 
} from 'react-icons/fa';
import Link from 'next/link';
const TelecomServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Service data
  const services = [
    {
      icon: <FaWifi className="text-4xl" />,
      title: "High-Speed Internet",
      description: "Blazing fast fiber optic connections for seamless browsing and streaming.",
      delay: 0.1
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Plans",
      description: "Affordable and flexible mobile plans with unlimited nationwide calls.",
      delay: 0.2
    },
    {
      icon: <FaTv className="text-4xl" />,
      title: "Digital TV",
      description: "Crystal clear HD channels with premium content for the whole family.",
      delay: 0.3
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Global Connectivity",
      description: "International calling and roaming packages for travelers.",
      delay: 0.4
    },
  ];

  const features = [
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "24/7 Support",
      description: "Our customer service team is always available to assist you."
    },
    {
      icon: <FaSignal className="text-4xl" />,
      title: "Reliable Network",
      description: "99.9% uptime guarantee with our robust infrastructure."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges."
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 relative overflow-hidden">
      {/* Navbar */}
      <nav className="bg-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-xl" />
             <Link href="/" className="text-xl font-bold hover:text-orange-200">
          Connect Without Limits
        </Link>
            </div>
            
            {/* Desktop Navigation */}
             <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-orange-200 transition">
          Home
        </Link>
        <Link href="/components/telecom-services" className="hover:text-orange-200 transition">
          Services
        </Link>
        <Link href="#features" className="hover:text-orange-200 transition">
          Features
        </Link>
        <Link href="#contact" className="hover:text-orange-200 transition">
          Contact
        </Link>
      </div>
            
            {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
    
    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 pb-4 space-y-3">
        <Link 
          href="/" 
          className="block hover:text-orange-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/components/telecom-services" 
          className="block hover:text-orange-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <a 
          href="#features" 
          className="block hover:text-orange-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Features
        </a>
        <a 
          href="#contact" 
          className="block hover:text-orange-200 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    )}
        </div>
      </nav>

      {/* Floating decorative elements */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-10 w-16 h-16 rounded-full bg-orange-300 opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden md:block absolute top-1/3 right-20 w-24 h-24 rounded-full bg-orange-400 opacity-15"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-orange-500 opacity-10"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-b from-orange-700 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Connect Without Limits</h1>
              <p className="text-xl md:text-2xl mb-8">Premium telecom services for homes and businesses across the nation from <span className='font-bold text-black bg-orange-500 border padding-4 rounded-lg'><Link href="/">Netcall Services</Link></span></p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition flex items-center">
                Explore Plans <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Telecom services" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive telecom solutions tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional service and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to find the perfect plan for your needs.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <input 
                type="text" 
                placeholder="Your email address" 
                className="px-6 py-3 rounded-full text-gray-800 flex-grow max-w-md"
              />
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-orange-900 text-orange-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-xl" />
                <span className="text-xl font-bold">TeleConnect</span>
              </div>
              <p className="mt-2">Connecting you to what matters most.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Careers</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-orange-700 text-center">
            <p>© {new Date().getFullYear()} TeleConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TelecomServicesPage;