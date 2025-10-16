import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Musica from "./Musica";
import Cine from "./Cine";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicarV2 from "./TablaMultiplicarV2";
import SeleccionMultiple from "./SeleccionMultiple";

export const Router = () => {
  return (
    <BrowserRouter>
      {/* Navegación */}
      <nav>
        <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
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
          <li>
            <Link to="/collatz">Collatz</Link>
          </li>
          <li>
            <Link to="/tablamultiplicar">Tabla Multiplicar</Link>
          </li>
          <li>
            <Link to="/tablamultiplicarv2">Tabla Multiplicar V2</Link>
          </li>
          <li>
            <Link to="/seleccionmultiple">Selección Múltiple</Link>
          </li>
        </ul>
      </nav>
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/cine" element={<Cine />} />
        <Route path="/formsimple" element={<FormSimple />} />
        <Route path="/collatz" element={<Collatz />} />
        <Route path="/tablamultiplicar" element={<TablaMultiplicar />} />
        <Route path="/tablamultiplicarv2" element={<TablaMultiplicarV2 />} />
        <Route path="/seleccionmultiple" element={<SeleccionMultiple />} />
      </Routes>
    </BrowserRouter>
  );
};
