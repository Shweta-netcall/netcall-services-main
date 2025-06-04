'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { services } from '../../data/services'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)

  if (!service) return notFound()

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`bg-gradient-to-r ${service.color} py-20 text-white`}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Service Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 bg-gray-50 flex-grow"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${service.color} p-6 rounded-lg text-white mb-8`}
            >
              <div className="bg-white/20 rounded-full p-4 w-fit">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold mt-4">{service.title}</h2>
            </motion.div>

            {/* Add your service-specific content here */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="prose-lg text-gray-700"
            >
              <p>Detailed service description and features...</p>
              {/* Add more content sections as needed */}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8"
            >
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
      </motion.div>

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