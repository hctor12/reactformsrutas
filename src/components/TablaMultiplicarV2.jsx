import React, { useRef, useState } from "react";

const TablaMultiplicarV2 = () => {
  const cajaNum = useRef();
  //   const [numeros, setNumeros] = useState([]);
  const numeros = [];
  const numerosTabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [valor, setValor] = useState("");

  const generarTabla = (e) => {
    e.preventDefault();
    let numero = parseInt(cajaNum.current.value);
    console.log(numero);
    setValor(numero);
  };

  const generarRandoms = () => {
    for (let i = 0; i < 3; i++) {
      let aleatorio = parseInt(Math.random() * 10) + 1;
      console.log(aleatorio);
      numeros.push(aleatorio);
    }
  };

  return (
    <div>
      <h1>Tabla Multiplicar</h1>
      <form onSubmit={generarTabla}>
        <label htmlFor="cajaNum">Seleccione número </label>
        {generarRandoms()}
        <select type="number" name="cajaNum" ref={cajaNum}>
          {numeros.length > 0
            ? numeros.map((num, index) => {
                return <option key={index}>{num}</option>;
              })
            : null}
        </select>
        <button>Generar</button>
      </form>
      <table border={1}>
        <tbody>
          {valor !== ""
            ? numerosTabla.map((num, index) => {
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

export default TablaMultiplicarV2;
