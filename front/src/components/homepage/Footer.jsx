import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          AI Career
        </Link>
        <p className="mb-6 md:mb-8 text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} AI Career Platform. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 md:space-x-8 text-sm md:text-base text-gray-400">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
