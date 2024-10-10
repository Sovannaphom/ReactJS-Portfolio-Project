// App.js
import React, { useMemo } from 'react';
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Home from './containers/home/indext';
import About from './containers/about/indext';
import Resume from './containers/resume/indext';
import Skills from './containers/skills/indext';
import Portfolio from './containers/portfolio/indext';
import Contact from './containers/contact/indext';
import NavBar from './components/navBar/indext';
import { particlesConfig } from './utils.js/particles';
import { loadSlim } from 'tsparticles-slim';


function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (engine) => {
    await loadSlim(engine);
  };

  const renderparticleJsInHomePage = location.pathname === "/";


  return (
    <div className="App">

      {/* Navbar */}
      <NavBar />

      {/* Particles js */}
      {
        renderparticleJsInHomePage && (
          <Particles id="tsparticles" init={handleInit} options={particlesConfig} />
        )
      }

      {/* Main page content */}
      <div className='App__main-page-contence'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
