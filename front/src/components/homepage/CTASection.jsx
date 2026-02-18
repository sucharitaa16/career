import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Ready to Launch Your Career?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 opacity-90">
          Join thousands building better futures with AI.
        </p>
        <Link
          to="/signup"
          className="bg-white text-indigo-600 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2 md:gap-3"
        >
          Start Free Trial <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </motion.div>
    </section>
  );
}

export default CTASection;
