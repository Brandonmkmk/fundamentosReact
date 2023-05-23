import { useEffect, useState, useRef } from "react";
{
  /*useEffect unifica 3 metodos asociados al ciclo de vida de nuestros componentes, este hook al igual que los otros son funciones, y recibe 2 parametros, el primero corresponde a un callback o funcion y el segundo a un arreglo de dependencias, el callback no recibe ningun parametro, solamente ejecuta el codigo en el momento que se produzca el efecto deseado, el segundo parametro es opcional y dependiendo de su valor el efecto se ejecutara.*/
}

{
  /*Momento de ejecucion segun el valor del segundo parametro: cuando omitimos este parametro el efecto se producira en el primer renderizado y en cada que se produce un cambio en la variable de estado o de props, Arreglo vacio: cuando pasamos este valor, el efecto se producira unicamente en el primer renderizado que a esto se le conoce como fase de montaje, Arreglo con dependencias: los valores de este arreglo pueden ser variables asociadas a un estado o props del componente, segun sea el caso el hook se ejecutara cada vez que sus dependencias se actualizen, a esto se le conoce como fase de actualizacion,*/
}

export const MiComponente = () => {
  const [count, setCount] = useState(0);

  {
    /*El efecto solo se ejecuta cuando la variable de estado count cambie, ya que se la esta pasando el segundo parametro con dependencias, si el segundo parametro se dejara vacio solo se ejecutaria: Numero de clicks:0(fase de montaje)*/
  }
  useEffect(() => {
    console.log(`Numero de clicks:${count}`);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      {/*Cada que se da click en el boton, la variable de estado count se actualiza en 1, es por eso que el console.log que esta dentro del efecto se ejecuta tambien*/}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export const Words = () => {
  const [texto, setTexto] = useState("");
  let divTexto = useRef();

  /*el efecto solo se ejecuta cuando la variable texto cambie, osea si un usuario escribe en el input, debajo de este input se mostrara en un parrafo lo que se este escribiendo*/
  useEffect(() => {
    divTexto.current.innerHTML += `
    <p>${texto}</p>
    `;
  }, [texto]);

  return (
    <>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <div
        style={{ display: "flex" }}
        ref={divTexto}
        className="container-texto"
      ></div>
    </>
  );
};
