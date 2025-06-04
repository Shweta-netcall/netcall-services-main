'use client'
import { useState } from 'react'
import Link from "next/link"
import { Phone, Globe, Server, PhoneCall, Headphones, Users, Building, Network, ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      title: "International Wholesale VoIP Termination",
      icon: <Globe className="h-10 w-10" />,
      description: "High-quality voice termination services with global coverage and competitive rates for carriers and service providers.",
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Origination and Business VoIP Provider",
      icon: <Phone className="h-10 w-10" />,
      description: "Complete VoIP solutions for businesses of all sizes with premium voice quality and reliability.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Hosted Soft-Switch",
      icon: <Server className="h-10 w-10" />,
      description: "Fully managed soft-switch solutions that enable you to launch your own VoIP service without infrastructure investment.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Toll Free Numbers",
      icon: <PhoneCall className="h-10 w-10" />,
      description: "Toll-free number services across multiple countries to enhance your business accessibility and customer service.",
      color: "from-green-500 to-teal-500"
    },
    {
        title: "Software Solutions",
        icon: <Network className="h-10 w-10" />,
        description: "DID numbers that allow external calls to be routed directly to specific extensions within your organization.",
        color: "from-orange-500 to-black"
      },
    {
      title: "Auto-Dialer",
      icon: <Headphones className="h-10 w-10" />,
      description: "Advanced auto-dialer solutions for outbound call campaigns with customizable features and analytics.",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Virtual Call Center",
      icon: <Users className="h-10 w-10" />,
      description: "Cloud-based call center solutions that enable your team to work from anywhere with full functionality.",
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "International Virtual Phone Numbers",
      icon: <Building className="h-10 w-10" />,
      description: "Virtual phone numbers from over 100 countries to establish local presence in global markets.",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "DID's (Direct Inward Dialing)",
      icon: <Network className="h-10 w-10" />,
      description: "DID numbers that allow external calls to be routed directly to specific extensions within your organization.",
      color: "from-cyan-500 to-blue-500"
    },
    
  ]

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex">
        <Link href="/" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Home
        </Link>
        <Link href="/latest-news" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Latest News
        </Link>
        <Link href="/vacancies" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Vacancies
        </Link>
        <Link href="/services" className="bg-purple-600 text-white py-4 px-6 hover:bg-purple-700 transition-colors">
          Our Services
        </Link>
        <Link href="/contact-us" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Contact Us
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Netcall Services offers a comprehensive suite of telecommunications solutions designed to meet the needs of businesses of all sizes.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="relative"
                variants={item}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300
                  ${hoveredCard === index ? 'transform scale-105' : ''}
                `}>
                  <div className={`bg-gradient-to-r ${service.color} p-6 h-full flex flex-col`}>
                    <div className="bg-white/20 rounded-full p-4 w-fit mb-6 text-white">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/90 mb-6 flex-grow">{service.description}</p>
                    
                    <motion.div 
                      className="mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href="#" 
                        className="inline-flex items-center text-white font-medium group"
                      >
                        Learn More 
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                
                {/* Animated particles */}
                {hoveredCard === index && (
                  <>
                    <motion.div 
                      className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white/30"
                      animate={{ 
                        x: [0, 20, 0], 
                        y: [0, -20, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-white/30"
                      animate={{ 
                        x: [0, 15, 0], 
                        y: [0, 15, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white/20"
                      animate={{ 
                        x: [0, -20, 0], 
                        y: [0, 10, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Communications?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss how our services can help your business grow and succeed.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-8 rounded-md hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 font-medium group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Netcall Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
