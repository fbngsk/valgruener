import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { ModisaProject } from './components/Sections/ModisaProject';
import { Book } from './components/Sections/Book';
import { LiveTour } from './components/Sections/LiveTour';
import { Media } from './components/Sections/Media';
import { Footer } from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-safari-50 text-safari-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ModisaProject />
        <Book />
        <LiveTour />
        <Media />
      </main>
      <Footer />
    </div>
  );
}

export default App;