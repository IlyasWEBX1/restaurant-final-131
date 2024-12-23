import logo from './logo.svg';
import Header from './components/Header'
import Menu from './components/Menu'
import FAQ from './components/FAQ'
import About from './components/About'
import Footer from './components/Footer'
import Hour from './components/Hour'
import './index.css'
import './App.css';
import { Link } from 'react-dom'
import { useState, useEffect } from 'react';

function App() {

  const [activeComponent, setActiveComponent] = useState('menu'); // Default to 'menu'

  // Function to handle changing the active component
  const handleChangeComponent = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header onChangeComponent={handleChangeComponent} />
      </header>
      <main id='td' className='bg-grey-550 flex-grow px-6 py-12'>
        {activeComponent === 'menu' && <Menu />}
        {activeComponent === 'FAQ' && <FAQ />}
        {activeComponent === 'about' && <About />}
        {activeComponent === 'openings' && <Hour />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
