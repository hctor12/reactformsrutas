import React, { useState } from "react";

const Collatz = () => {
  const cajaNumero = React.createRef();
  const [numeros, setNumeros] = useState([]);

  const generarCollatz = (e) => {
    e.preventDefault();
    let num = parseInt(cajaNumero.current.value);
    let aux = [];
    while (num != 1) {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
      aux.push(num);
    }
    setNumeros(aux);
  };

  return (
    <div>
      <h1>Conjetura Collatz</h1>
      <form onSubmit={generarCollatz}>
        <label htmlFor="cajaNumero">Introduzca número</label>
        <input type="number" name="cajaNumero" ref={cajaNumero} />
        <button>Mostrar conjetura</button>
        <ul>
          {numeros.map((num, index) => {
            return <li key={index}>{num}</li>;
          })}
        </ul>
      </form>
    </div>
  );
};

export default Collatz;
