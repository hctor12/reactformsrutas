import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Musica from "./Musica";
import Cine from "./Cine";
import FormSimple from "./FormSimple";

export const Router = () => {
  return (
    <BrowserRouter>
      {/* Navegación */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/musica">Música</Link>
          </li>
          <li>
            <Link to="/cine">Cine</Link>
          </li>
          <li>
            <Link to="/formsimple">FormSimple</Link>
          </li>
        </ul>
      </nav>
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/cine" element={<Cine />} />
        <Route path="/formsimple" element={<FormSimple />} />
      </Routes>
    </BrowserRouter>
  );
};
