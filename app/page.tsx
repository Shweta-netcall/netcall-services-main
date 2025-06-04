"use client";

import TypewriterText from "@/components/TypeWriter/TypeWriterText";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
// import { WorldMap } from "@/components/ui/world-map"; // Kept as per original
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"; // Kept as per original
import PageWrapper from "../app/page-wrapper"; // Ensure this path is correct
// import { HoveredLink } from "@/components/ui/navbar-menu"; // Kept as per original
import { NavbarDemo } from "@/components/navbar";

// --- Sub-component for the animated divider to handle client-side random values ---
const FuturisticAnimatedDivider = () => {
  const [particles, setParticles] = useState<Array<React.CSSProperties>>([]);
  const [orbs, setOrbs] = useState<Array<React.CSSProperties>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark that component has mounted on client

    // Generate particles
    const newParticles: Array<React.CSSProperties> = Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.8 + 0.2,
      animation: `float ${Math.random() * 10 + 10}s infinite linear ${Math.random() * 5}s`,
    }));
    setParticles(newParticles);

    // Generate orbs
    const newOrbs: Array<React.CSSProperties> = Array.from({ length: 5 }).map((_, i) => ({
      width: `${Math.random() * 100 + 50}px`,
      height: `${Math.random() * 100 + 50}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      background: `radial-gradient(circle, ${
        i % 2 === 0 ? "rgba(45, 212, 191, 0.3)" : "rgba(147, 51, 234, 0.3)"
      } 0%, transparent 70%)`,
      animation: `pulse ${Math.random() * 4 + 3}s infinite ease-in-out ${Math.random() * 2}s`,
    }));
    setOrbs(newOrbs);
  }, []);

  if (!isClient) {
    // Render a static placeholder or nothing on the server / initial client render
    return <div className="relative h-64 bg-gray-900"></div>;
  }

  return (
    <div className="relative h-64 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated grid lines */}
          <div className="absolute inset-0 grid-animation">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`h-line-${i}`}
                className="absolute h-px bg-teal-500/20"
                style={{
                  top: `${i * 10}%`,
                  left: 0,
                  right: 0,
                  animation: `pulseWidth 8s infinite ${i * 0.2}s`,
                }}
              ></div>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`v-line-${i}`}
                className="absolute w-px bg-purple-500/20"
                style={{
                  left: `${i * 5}%`,
                  top: 0,
                  bottom: 0,
                  animation: `pulseHeight 6s infinite ${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {particles.map((style, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-teal-400"
                style={style}
              ></div>
            ))}
          </div>

          {/* Animated glowing orbs */}
          <div className="absolute inset-0">
            {orbs.map((style, i) => (
              <div
                key={`orb-${i}`}
                className="absolute rounded-full"
                style={style}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" height="40" viewBox="0 0 1440 40" preserveAspectRatio="none">
        <path
          d="M0,20 L120,20 L140,0 L160,40 L180,20 L240,20 L260,0 L280,40 L300,20 L420,20 L440,0 L460,40 L480,20 L540,20 L560,0 L580,40 L600,20 L720,20 L740,0 L760,40 L780,20 L840,20 L860,0 L880,40 L900,20 L1020,20 L1040,0 L1060,40 L1080,20 L1140,20 L1160,0 L1180,40 L1200,20 L1320,20 L1340,0 L1360,40 L1380,20 L1440,20"
          stroke="rgba(45, 212, 191, 0.5)"
          strokeWidth="1"
          fill="none"
          className="circuit-path"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-text-reveal">
            <span className="inline-block">Ready</span> <span className="inline-block">to</span>{" "}
            <span className="inline-block">Transform</span> <span className="inline-block">Your</span>{" "}
            <span className="inline-block">Communications?</span>
          </h2>
          <p className="text-teal-300 animate-fade-in-up">
            Discover how Netcall Services can help your business grow
          </p>
        </div>
      </div>
      {/* Add keyframes for animations used here if not global */}
      <style jsx>{`
        @keyframes pulseWidth { /* ... your keyframes ... */ }
        @keyframes pulseHeight { /* ... your keyframes ... */ }
        /* float and pulse are defined globally later or should be added if specific */
        .circuit-path { /* ... your styles ... */ }
        .animate-text-reveal { /* ... your styles ... */ }
        .animate-fade-in-up { /* ... your styles ... */ }
      `}</style>
    </div>
  );
};
// --- End of FuturisticAnimatedDivider component ---

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsContentVisible(true), 50); // For home page content fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <NavbarDemo />
        <div className="min-h-screen flex flex-col bg-orange-100 relative">
          {/* Mobile Menu Button and Panel */}
          <div className="relative z-[1000]"> {/* Container for button and menu */}
            <button
              onClick={toggleMenu}
              className="fixed top-4 left-4 z-[1050] p-2 bg-orange-600 rounded-md hover:bg-orange-700 transition-colors text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Clickable Overlay for closing menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[1030]"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Actual Menu Panel (slide-in) */}
            <div
              className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-[1040] ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl font-bold text-orange-500">Netcall Services</h2>
                  <button onClick={toggleMenu} className="text-gray-400 hover:text-orange-500">
                    <X size={20} />
                  </button>
                </div>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/"
                    className="py-2.5 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/latest-news"
                    className="py-2.5 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                    onClick={toggleMenu}
                  >
                    Latest News
                  </Link>
                  <Link
                    href="/vacancies"
                    className="py-2.5 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                    onClick={toggleMenu}
                  >
                    Vacancies
                  </Link>
                  <Link
                    href="/contact-us"
                    className="py-2.5 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 relative bg-orange-100 ">
            {/* Animated Logo */}
            <div className="absolute top-0 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 mt-4 sm:mt-6 z-20">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/logo.png" // Ensure this path is correct in your public folder
                  alt="Netcall Services Logo"
                  className="w-full h-full object-contain bg-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                  style={{
                    animation: "logoFloat 3s ease-in-out infinite, logoPulse 2s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-10 text-center pt-20 sm:pt-24"> {/* Added padding top */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-orange-600 mt-10 mb-10">
                Netcall Services
              </h1>
              <div className="mb-10 pb-10"> {/* Wrapped TypewriterText for better layout control if needed */}
                <TypewriterText />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 sm:gap-6 mb-16 sm:mb-20 mt-8 sm:mt-10 ">
                <Link href="https://www.facebook.com/profile.php?id=61576904041112" className="text-gray-700 hover:text-orange-600 transition-colors ">
                  <Facebook size={28} /> {/* Adjusted size */}
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://x.com/services72506"
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <Twitter size={28} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-700 hover:text-orange-600 transition-colors"> {/* Replace # with actual LinkedIn URL */}
                  <Linkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:prasanna@netcallservices.com" className="text-gray-700 hover:text-orange-600 transition-colors">
                  <Mail size={28} />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 sm:mb-20 px-4">
            <Link
              href="/contact-us"
              className="bg-orange-600 text-white py-3 px-8 rounded-md hover:bg-black transition-colors font-medium w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-white text-orange-600 border border-orange-600 py-3 px-8 rounded-md hover:bg-orange-600 hover:text-white transition-colors font-medium w-full sm:w-auto text-center"
            >
              Our Services
            </Link>
          </div>

          <FuturisticAnimatedDivider />

          {/* About Section */}
          <div className="bg-orange-100 py-12 sm:py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-block bg-white rounded-full p-3 sm:p-4 mb-4 shadow">
                {/* Consider using an icon or a more visually appealing element */}
                <span className="text-xl sm:text-2xl text-orange-600 font-semibold">?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                WHO WE ARE AND WHY CHOOSE US
              </h2>
              <p className="max-w-3xl mx-auto text-gray-700 mb-4 text-base sm:text-lg">
                Netcall Services is an international telecommunications company, established in 2013, that provides
                various telecommunications services and solutions.
              </p>
              <p className="max-w-3xl mx-auto text-gray-700 mb-8 sm:mb-10 text-base sm:text-lg">
                Netcall Services is driven by a mission to give the possibility to everyone to reach out and connect with
                the world.
              </p>
            </div>
          </div>
          
          {/* Timeline Section - Kept commented as per original */}
          {/* <div className="bg-orange-100 py-16"> ... </div> */}

          {/* Services Section */}
          <div className="bg-orange-100 py-12 sm:py-16 relative overflow-hidden">
            {/* Floating Background Elements (Decorative) */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-300/10 rounded-full blur-3xl animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl animate-bounce opacity-50" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-orange-500/15 rounded-full blur-xl animate-ping opacity-50" style={{animationDelay: '1s', animationDuration: '6s'}}></div>

            <div className="container mx-auto px-4 relative z-10">
              <h2 className={`text-3xl sm:text-4xl font-bold text-orange-600 text-center mb-12 transform transition-all duration-1000 ${
                isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                Our Services
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Service Card 1: Voice Solutions */}
                <div className={`group bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-orange-400/40 cursor-pointer hover:-translate-y-2 service-card-float ${
                  isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`} style={{transitionDelay: isContentVisible ? '0.1s' : '0s'}}>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:shadow-xl group-hover:shadow-orange-500/50">
                    <Phone className="text-white transition-all duration-300 group-hover:scale-110" size={28} />
                    <div className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 -z-10"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 transition-all duration-300 group-hover:text-orange-600 group-hover:scale-105">
                    Voice Solutions
                  </h3>
                  <p className="text-gray-600 text-center text-sm transition-all duration-300 group-hover:text-gray-700">
                    High-quality voice services with global coverage and competitive rates for businesses of all sizes.
                  </p>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-lg transition-all duration-300 -z-10"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-b-lg"></div>
                </div>

                {/* Service Card 2: Messaging Services */}
                 <div className={`group bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-orange-400/40 cursor-pointer hover:-translate-y-2 service-card-float ${
                  isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`} style={{transitionDelay: isContentVisible ? '0.2s' : '0s'}}>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:shadow-xl group-hover:shadow-orange-500/50">
                    <Mail className="text-white transition-all duration-300 group-hover:scale-110" size={28} />
                    <div className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 -z-10"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 transition-all duration-300 group-hover:text-orange-600 group-hover:scale-105">
                    Messaging Services
                  </h3>
                  <p className="text-gray-600 text-center text-sm transition-all duration-300 group-hover:text-gray-700">
                    Reliable SMS and messaging solutions for effective communication with your customers.
                  </p>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-lg transition-all duration-300 -z-10"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-b-lg"></div>
                </div>

                {/* Service Card 3: Enterprise Solutions */}
                 <div className={`group bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-orange-400/40 cursor-pointer hover:-translate-y-2 service-card-float ${
                  isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`} style={{transitionDelay: isContentVisible ? '0.3s' : '0s'}}>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:shadow-xl group-hover:shadow-orange-500/50">
                    <CheckCircle className="text-white transition-all duration-300 group-hover:scale-110" size={28} />
                    <div className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 -z-10"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 transition-all duration-300 group-hover:text-orange-600 group-hover:scale-105">
                    Enterprise Solutions
                  </h3>
                  <p className="text-gray-600 text-center text-sm transition-all duration-300 group-hover:text-gray-700">
                    Custom telecommunications solutions designed specifically for enterprise-level requirements.
                  </p>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-lg transition-all duration-300 -z-10"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-orange-100 py-12 sm:py-16 relative overflow-hidden">
            <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/10 rounded-lg blur-3xl animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>

            <div className="container mx-auto px-4 relative z-10">
              <h2 className={`text-3xl sm:text-4xl font-bold text-orange-600 text-center mb-12 transform transition-all duration-1000 ${
                isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{transitionDelay: isContentVisible ? '0.2s' : '0s'}}>
                Why Choose Netcall Services
              </h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {[
                  { title: "Global Coverage", text: "Our services extend across the globe, ensuring you can connect with anyone, anywhere, at any time.", delay: '0.1s' },
                  { title: "Reliable Infrastructure", text: "Our robust infrastructure ensures high uptime and reliability for all your communication needs.", delay: '0.2s' },
                  { title: "Competitive Pricing", text: "We offer some of the most competitive rates in the industry without compromising on quality.", delay: '0.3s' },
                  { title: "24/7 Support", text: "Our dedicated support team is available around the clock to assist you with any issues.", delay: '0.4s' }
                ].map((benefit, index) => (
                  <div key={index} className={`flex items-start p-4 rounded-lg benefit-card-float transform transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-1 ${
                    isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`} style={{transitionDelay: isContentVisible ? benefit.delay : '0s'}}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials and other sections commented out as per original */}
          {/* <AnimatedTestimonials testimonials={[...]} /> */}
          {/* <PinContainer> ... </PinContainer> */}

          {/* Latest News Section (placeholder based on original comment) */}
          <div className="bg-orange-100 py-12 sm:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className={`text-3xl sm:text-4xl font-bold text-orange-600 text-center mb-12 transform transition-all duration-1000 ${
                isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{transitionDelay: isContentVisible ? '0.3s' : '0s'}}>
                Latest News
              </h2>
              {/* Add your latest news content here */}
              <p className="text-gray-700">Stay tuned for our latest updates and announcements!</p>
            </div>
          </div>

        </div> {/* End of min-h-screen */}
      </div> {/* End of content visibility wrapper */}

      {/* Global Keyframes for animations used multiple times */}
      <style jsx global>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); } /* Adjusted for logo size */
        }
        @keyframes logoPulse {
          0% { box-shadow: 0 0 0 0 rgba(236, 128, 30, 0.6); } /* Adjusted color */
          70% { box-shadow: 0 0 0 12px rgba(236, 128, 30, 0); } /* Adjusted color */
          100% { box-shadow: 0 0 0 0 rgba(236, 128, 30, 0); } /* Adjusted color */
        }
        @keyframes float { /* General float, used by FuturisticDivider particles */
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse { /* General pulse, used by FuturisticDivider orbs */
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        .service-card-float, .benefit-card-float { /* For a subtle hover/idle float */
          animation: float 6s ease-in-out infinite;
        }
        /* Keyframes for FuturisticAnimatedDivider if not already defined within its style block */
        @keyframes pulseWidth {
          0%, 100% { width: 0%; left: 50%; }
          50% { width: 100%; left: 0%; }
        }
        @keyframes pulseHeight {
          0%, 100% { height: 0%; top: 50%; }
          50% { height: 100%; top: 0%; }
        }
        .circuit-path {
            stroke-dasharray: 1000; /* A large number to cover the path length */
            stroke-dashoffset: 1000;
            animation: drawCircuit 5s linear infinite;
        }
        @keyframes drawCircuit {
            to {
                stroke-dashoffset: 0;
            }
        }
        .animate-text-reveal span {
            opacity: 0;
            transform: translateY(20px);
            animation: revealItem 0.5s forwards;
        }
        @keyframes revealItem {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        /* Stagger reveal for text spans */
        ${Array.from({ length: 5 }).map((_, i) => `.animate-text-reveal span:nth-child(${i + 1}) { animation-delay: ${i * 0.15}s; }`).join('\n')}

        .animate-fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s forwards 0.8s; /* Delay after text reveal */
        }
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>
    </PageWrapper>
  );
}