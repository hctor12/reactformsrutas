import React, { useRef, useState } from "react";

const SeleccionMultiple = () => {
  const selectMultiple = useRef();
  const [seleccionados, setSeleccionados] = useState();

  const mostrarSeleccionados = (e) => {
    e.preventDefault();
    console.log(selectMultiple.current.options);
    let options = selectMultiple.current.options;
    var data = "";
    for (var option of options) {
      if (option.selected == true) {
        console.log(option.value);
        data += option.value + ",";
      }
    }

    // Array.from(options).forEach((option) => {
    //   if (option.selected == true) {
    //     console.log(option.value);
    //     data += option.value + ",";
    //   }
    // });

    setSeleccionados(data);
  };

  return (
    <div>
      <h1>Selección Múltiple</h1>
      <h2 style={{ color: "blue" }}>{seleccionados}</h2>
      <form onSubmit={mostrarSeleccionados}>
        <label htmlFor="select">Seleccione varios elementos</label>
        <select name="select" size="10" multiple ref={selectMultiple}>
          <option>Elemento 1</option>
          <option>Elemento 2</option>
          <option>Elemento 3</option>
          <option>Elemento 4</option>
          <option>Elemento 5</option>
          <option>Elemento 6</option>
          <option>Elemento 7</option>
        </select>
        <button>Mostrar Seleccionados</button>
      </form>
    </div>
  );
};

export default SeleccionMultiple;
