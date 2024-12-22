import logo from './logo.svg';
import Header from './components/Header'
import Menu from './components/Menu'
import FAQ from './components/FAQ'
import About from './components/About'
import './index.css'
import './App.css';
import { Link } from 'react-dom'
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState('menu'); // Default to 'menu'

  // Function to handle changing the active component
  const handleChangeComponent = (component) => {
    setActiveComponent(component);
  };
  return (
    <>
      <header>
        <Header onChangeComponent={handleChangeComponent} />
      </header>
      <section>
        {activeComponent === 'FAQ' && <FAQ />}
        {activeComponent === 'about' && <About />}
      </section>
    </>
  );
}

export default App;
