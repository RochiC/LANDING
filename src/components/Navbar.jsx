import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MolGen.AI</h2>
      <div className="nav-links">
        <a href="#hero">Inicio</a>
        <a href="#how">Cómo funciona</a>
        <a href="#stats">Estadísticas</a>
        <a href="#join">Unite</a>
        <a href="#faq">FAQ</a>
      </div>
      <button className="btn">Generar</button>
    </nav>
  );
};

export default Navbar;
