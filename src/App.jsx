import { useState } from "react";
import "./App.css";
import "./styles/home.css";
import "./styles/Experience.css";
import "./styles/services.css";
import { HashRouter, Routes, Route } from "react-router-dom";


import {
  Home,
  AboutUs,
  Contact,
  Experience,
  Services,
} from "./pages/In.jsx";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  return (
    <HashRouter>
      <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
      <Footer/>
      </>
    </HashRouter>
  );
}

export default App;
