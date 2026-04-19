import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Market from './components/Market';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import { ProgressBar } from './components/ScrollAnimations';

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <MouseFollower />
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Roadmap />
      <Market />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
