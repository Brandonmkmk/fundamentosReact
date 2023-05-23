import { useState, useEffect } from "react";

export const Ajax = () => {
  /*Se usa un useState para guardar la respuesta de la peticion en pokemones, pero la variable pokemones se inicializa en un arreglo vacio*/

  const [pokemones, setpokemones] = useState([]);

  /*El useEffect solo ejecuta su fase de montaje (una vez), ya que el arreglo no esta recibiendo ninguna variable de estado o props*/

  useEffect(() => {
    const getPokemones = async () => {
      let url = await fetch("https://rickandmortyapi.com/api/character/");
      let data = await url.json();
      let info = await data.results;
      console.log("se ha montado el useEffect");

      /*La variable de estado pokemones ahora recibe como valor los resultados de la peticion a la API*/
      setpokemones(info);
    };
    getPokemones();
  }, []);

  return (
    <div>
      <h1>Peticiones asincronas con hooks</h1>
      {pokemones.length === 0 ? (
        <h3>Cargando.......</h3>
      ) : (
        pokemones.map((pokemon) => {
          return <Pokemones imagen={pokemon.image} name={pokemon.name} />;
        })
      )}
    </div>
  );
};

export const Pokemones = ({ imagen, name }) => {
  return (
    <div>
      <img src={imagen} alt="" />
      <h2>{name}</h2>
    </div>
  );
};
