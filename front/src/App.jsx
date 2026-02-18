import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/homepage/Navbar';
import HeroSection from './components/homepage/HeroSection';
import FeaturesSection from './components/homepage/feature/FeaturesSection';
import CTASection from './components/homepage/CTASection';
import Footer from './components/homepage/Footer';

// Import feature pages
import AIResumeBuilder from './components/homepage/feature/featuresection/AIResumeBuilder';
// Import other feature components (you'll need to create these)
  import ResumeAnalyser from './components/homepage/feature/featuresection/ResumeAnalyser';
import CoverLetters from './components/homepage/feature/featuresection/CoverLetters';
// import InterviewPrep from './components/homepage/feature/featuresection/InterviewPrep';
// import JobMatching from './components/homepage/feature/featuresection/JobMatching';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 font-sans">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                
                <CTASection />
              </>
            }
          />

          {/* Individual feature routes */}
          <Route path="/AIResumeBuilder" element={<AIResumeBuilder />} />
          <Route path="/resume-analyser" element={<ResumeAnalyser/>} />
          <Route path="/cover-letters" element={<CoverLetters/>}/>
          <Route path="/interview-prep" element={<div className="min-h-screen pt-20 text-center text-white">Interview Prep Page (Coming Soon)</div>} />
          <Route path="/job-matching" element={<div className="min-h-screen pt-20 text-center text-white">Job Matching Page (Coming Soon)</div>} />
          
          {/* Optional: Keep the features page if you want a dedicated features overview */}
          <Route path="/features" element={<FeaturesSection />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;