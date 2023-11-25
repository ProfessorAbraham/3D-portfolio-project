import React from "react";
import {BrowserRouter} from "react-router-dom";
import {About, Contact , Experience , Feedbacks , Hero , Loader , Navbar , Tech , Works , StarsCanvas ,FooterSection } from "./components";

function App() {

  return (
    <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>    
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className ="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>   
    <FooterSection />
   </div>
   </BrowserRouter>
  )
}

export default App
