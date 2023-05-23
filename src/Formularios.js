import { useState } from "react";

export const Formularios = () => {
  const [nombre, setNombre] = useState("");
  const [lenguajes, setLenguajes] = useState("");
  const [terminos, setTerminos] = useState(false);
  return (
    <>
      <form>
        <label htmlFor="nombre">Nombre</label>
        {/*La mejor manera de manipular inputs es hacer uso de un useState y un evento onChange donde recibira la funcion que actualiza la variable de estado y dentro de esta funcion se pone el valor que origino el evento, en este caso el input*/}
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {/*El evento onChange actualiza la variable de estado llamada lenguajes con el valor del evento que lo originina, en este caso cada unos de los elementos options que tiene un atributo value, que ese es el que se estara actualizando en la variable de estado*/}
        <select
          name="lenguajes"
          defaultValue=""
          onChange={(e) => {
            setLenguajes(e.target.value);
          }}
        >
          <option value="">Elige tu lenguaje favorito</option>
          <option value="JavaScript">JavaScript</option>{" "}
          {/*Si se elige esta opcion la variable de estado se actualizara con el value de JavaScript*/}
          <option value="java">java</option>{" "}
          {/*Si se elige esta opcion la variable de estado se actualizara con el value de java*/}
          <option value="python">python</option>{" "}
          {/*Si se elige esta opcion la variable de estado se actualizara con el value de python*/}
          <option value="php">php</option>{" "}
          {/*Si se elige esta opcion la variable de estado se actualizara con el value de php*/}
        </select>
        {/*el input de tipo checkbox se usa bastante para la opcion de terminos y condiciones, su propiedad checked siempre esta en false, y al presionarlo se cambia a true, depende a esto podemos hacer una programacion*/}
        <input
          onChange={(e) => setTerminos(e.target.checked)}
          type="checkbox"
          name=""
          id=""
        />
      </form>
    </>
  );
};
