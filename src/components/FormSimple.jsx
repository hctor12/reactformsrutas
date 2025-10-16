import React, { useState } from "react";

const FormSimple = () => {
  const cajaNombre = React.createRef();
  const btnSubmit = React.createRef();
  const [nombre, setNombre] = useState();

  const peticionFormulario = (e) => {
    // e.preventDefault()
    // console.log("Peticion lista!!!");

    let nombre = cajaNombre.current.value;
    console.log(`Nombre recibido: ${nombre}`);
    setNombre(nombre);
  };

  return (
    <div>
      <h1>Formulario simple react</h1>
      <h2 style={{ color: "blue" }}>{nombre}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Peticion lista!!!");
          peticionFormulario();
        }}
      >
        <input type="text" name="" ref={cajaNombre} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default FormSimple;
