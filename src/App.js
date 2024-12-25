import logo from './logo.svg';
import Header from './components/Header'
import Menu from './components/Menu'
import FAQ from './components/FAQ'
import About from './components/About'
import Footer from './components/Footer'
import Hour from './components/Hour'
import './index.css'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header>
          <Header />
        </header>
        <main id='td' className='bg-grey-550 flex-grow px-6 py-12'>
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Menu />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/openings" element={<Hour />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
