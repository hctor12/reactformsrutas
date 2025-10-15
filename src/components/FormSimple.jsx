import React from "react";

const FormSimple = () => {
  const cajaNombre = React.createRef();
  const btnSubmit = React.createRef();

  const peticionFormulario = (e) => {
    // e.preventDefault()
    // console.log("Peticion lista!!!");

    let nombre = cajaNombre.current.value;
    console.log(`Nombre recibido: ${nombre}`);
  };

  return (
    <div>
      <h1>Formulario simple react</h1>
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
