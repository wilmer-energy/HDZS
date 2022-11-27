import { useState } from "react";
import "./App.css";
import "./ProductInf.css";
import "./styles/home.css";
import "./styles/Login.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  LogIn,
  ProductDetails,
  Purchases,
  ProtectedRoutes,
} from "./pages/index";
import {
  AboutUs,
  Blog,
  Contact,
  Experience,
  Services,
} from "./pages/Index.jsx";
import {Cableado,Disenio,Renovables,UPS,Electrico} from "./pages/services/indexS";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
        <Route path="/LogIn" element={<LogIn />} />
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

/**
 * <HashRouter>
        <div>
        <BasicExample />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer/>
        </div>
      </HashRouter>
 */
