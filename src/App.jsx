
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import WhyChoose from '@/components/WhyChoose';
import StudentSuccess from '@/components/StudentSuccess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-50 antialiased">
      <Helmet>
        <title>CIME - College of Innovative Management and Engineering</title>
        <meta name="description" content="CIME offers globally relevant certificate and diploma programs in Quantity Surveying, Contract Administration, and Engineering. Join us to build your future." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/50 z-0"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>
        
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Courses />
            <WhyChoose />
            <StudentSuccess />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
  