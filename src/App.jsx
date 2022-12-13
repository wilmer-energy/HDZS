import { useState } from "react";
import "./App.css";
import "./ProductInf.css";
import "./styles/home.css";
import "./styles/Login.css";
import { HashRouter, Routes, Route } from "react-router-dom";


import {
  Home,
  AboutUs,
  Blog,
  Contact,
  Experience,
} from "./pages/In.jsx";
import {Cableado,Disenio,Renovables,UPS,Electrico} from "./pages/services/indexS";
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        
        <Route path="/UPS" element={<UPS/>} />
        <Route path="/cableado" element={<Cableado/>} />
        <Route path="/disenio" element={<Disenio/>} />
        <Route path="/eRenovables" element={<Renovables/>} />
        <Route path="/mElectrico" element={<Electrico/>} />
      </Routes>
      <Footer/>
      </>
    </HashRouter>
  );
}

export default App;
