import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">

      <div className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">Available for opportunities</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900"
          >
            Quan Do
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Computer Science Student & AI Engineer
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building scalable applications and solving complex problems 
            through elegant code. Currently pursuing B.S. in Computer Science and Engineering at Santa Clara University.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a 
              href="mailto:qldo@scu.edu" 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm">qldo@scu.edu</span>
            </a>
            <a 
              href="tel:6692037717" 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-sm">(669) 203-7717</span>
            </a>
            <span className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Santa Clara, CA</span>
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="https://www.linkedin.com/in/do-quan0310/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/dolamquan"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Learn More About Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold transition-all hover:border-blue-600 hover:bg-blue-50 hover:scale-105 shadow-lg"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
