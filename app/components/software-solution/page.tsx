'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaBars, 
  FaTimes, 
  FaCode, 
  FaArrowRight, 
  FaServer, 
  FaMobile, 
  FaCloud, 
  FaDatabase, 
  FaShieldAlt, 
  FaRobot, 
  FaChartLine 
} from 'react-icons/fa';

export default function SoftwareSolutionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Service data
  const services = [
    {
      icon: <FaServer className="text-4xl" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and high performance.",
      delay: 0.1
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Mobile Applications",
      description: "Cross-platform mobile apps with native performance and beautiful UI.",
      delay: 0.2
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure tailored to your needs.",
      delay: 0.3
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Design",
      description: "Optimized data storage solutions with efficient query performance.",
      delay: 0.4
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Security First",
      description: "Built with enterprise-grade security from the ground up."
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "AI Integration",
      description: "Smart features powered by machine learning and AI."
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Performance Optimized",
      description: "Lightning-fast solutions that scale with your business."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaCode className="text-xl" />
              <Link href="/" className="text-xl font-bold">SoftSolutions</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-200 transition">Home</Link>
              <Link href="/components/software-solutions" className="hover:text-blue-200 transition">Solutions</Link>
              <Link href="#features" className="hover:text-blue-200 transition">Features</Link>
              <Link href="#contact" className="hover:text-blue-200 transition">Contact</Link>
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
                className="block hover:text-blue-200 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/components/software-solutions" 
                className="block hover:text-blue-200 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <a 
                href="#features" 
                className="block hover:text-blue-200 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#contact" 
                className="block hover:text-blue-200 transition"
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
        className="hidden md:block absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-300 opacity-20"
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
        className="hidden md:block absolute top-1/3 right-20 w-24 h-24 rounded-full bg-blue-400 opacity-15"
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
        className="hidden md:block absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-500 opacity-10"
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
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-b from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovative Software Solutions</h1>
              <p className="text-xl md:text-2xl mb-8">Custom-built applications to transform your business operations.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition flex items-center">
                Get Started <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-400 rounded-xl opacity-20 blur-lg animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8">
                  <FaCode className="text-8xl mx-auto text-blue-300 animate-float" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="solutions" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software services tailored to your business needs.
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
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through cutting-edge technology.
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
                <div className="text-blue-500 mb-4 flex justify-center">
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
      <section id="contact" className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your software needs.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <input 
                type="text" 
                placeholder="Your email address" 
                className="px-6 py-3 rounded-full text-gray-800 flex-grow max-w-md"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <FaCode className="text-xl" />
                <span className="text-xl font-bold">SoftSolutions</span>
              </div>
              <p className="mt-2">Building the future, one line of code at a time.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition">Terms</Link>
              <Link href="#" className="hover:text-white transition">Privacy</Link>
              <Link href="#" className="hover:text-white transition">Careers</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-blue-700 text-center">
            <p>© {new Date().getFullYear()} SoftSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}