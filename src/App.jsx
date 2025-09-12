import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import JoinUs from "./components/JoinUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="how"><HowItWorks /></section>
      <section id="stats"><Stats /></section>
      <section id="join"><JoinUs /></section>
      <section id="faq"><FAQ /></section>
      <Footer />
    </div>
  );
}

export default App;
