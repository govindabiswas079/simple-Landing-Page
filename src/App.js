import React from 'react'
import About from './components/About';
import Feature from './components/Feature';
import Header from './components/Header';
import about1 from './images/Frame_19.png';
import about2 from './images/download.png';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Header />
      <Feature />
      <About image={about1} title="Comes With All You Need For Daily Life" button="Get The App" />
      <Presentation />
      <About image={about2} title="DOWNLOAD AND GET THE APP NOW" button="Download" />
      <Contact />
    </div>
  );
}

export default App;
