import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import GLeCar from "./pages/GleCar";
import Maybach from "./pages/Maybach";
import G64amg from "./pages/G64Car";
import Cabriolet from "./pages/Cabriolet";
import Header from "./components/header/Header";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:model" element={<GLeCar />} />
        {/* <Route path="/maybach" element={<Maybach />} />
        <Route path="/g64-amg" element={<G64amg />} />
        <Route path="/e-class-cabriolet" element={<Cabriolet />} /> */}
      </Routes>
    </>
  );
}
