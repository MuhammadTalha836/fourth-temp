
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import NavBar from './New/components/NavBar';
import HomeSection from './New/components/HomeSection';
import About from './New/components/About';
import Facts from './New/components/Facts';
import Pricing from './New/components/Pricing';
import Testominal from './New/components/Testominal';
import Subscribe from './New/components/Subscribe';

function App() {

  //for page animations 
  const [windowDim, SetwindowDim] = useState({ width: window.innerWidth, Height: window.innerHeight });

  const detectSize = () => {
    SetwindowDim({ width: window.innerWidth, Height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },);



  return (
    <div style={{ margin: "0", padding: "0" }}>
      <NavBar/>
      <HomeSection />
      <About/>
      <Facts />
      <Pricing/>
      <Testominal />
      <Subscribe/>
    </div>
  );
}

export default App;