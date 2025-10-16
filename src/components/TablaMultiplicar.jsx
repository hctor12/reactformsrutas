import React, { useRef, useState } from "react";

const TablaMultiplicar = () => {
  const cajaNum = useRef();
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [valor, setValor] = useState("");

  const generarTabla = (e) => {
    e.preventDefault();
    let numero = parseInt(cajaNum.current.value);
    console.log(numero);
    setValor(numero);
  };

  return (
    <div>
      <h1>Tabla Multiplicar</h1>
      <form onSubmit={generarTabla}>
        <label htmlFor="cajaNum">Introduzca número </label>
        <input type="number" name="cajaNum" ref={cajaNum} min={0} />
        <button>Generar</button>
      </form>
      <table border={1}>
        <tbody>
          {valor !== ""
            ? numeros.map((num, index) => {
                return (
                  <tr key={index}>
                    <td>{`${valor} * ${num}`}</td>
                    <td>{valor * num}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default TablaMultiplicar;
