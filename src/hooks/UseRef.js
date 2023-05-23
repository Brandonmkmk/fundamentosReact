/*El useRef nos permite referenciar un elemento del dom sin la necesidad de querySelector, document.getElementById, etc. basicamente funciona como un selector tradicionaal de javascript puro*/

import { useRef } from "react";
import "./app.css";
export const Referencias = () => {
  let refMenu = useRef();
  let refMenuBtn = useRef();
  const handleToggleMenu = () => {
    {
      /*Dentro de refMenuBtn hay un objeto donde el elemento del dom al que hace referencia esta dentro de la propiedad current, es decir en la propiedad current se encuentra el elemento como tal del dom al que se esta haciendo referencia, en este caso al button y al nav*/
    }

    if (refMenuBtn.current.textContent === "menu") {
      refMenuBtn.current.textContent = "cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "menu";
      refMenu.current.style.display = "none";
    }
  };
  return (
    <div>
      <h1>Referencias en ReactJS</h1>
      {/*El atributo ref recibe como parametro el nombre que se le puso al useRef, es como el id*/}
      <button onClick={handleToggleMenu} ref={refMenuBtn}>
        menu
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="">seccion1</a>
        <br />
        <a href="">seccion2</a>
        <br />
        <a href="">seccion3</a>
        <br />
        <a href="">seccion4</a>
        <br />
        <a href="">seccion5</a>
      </nav>
    </div>
  );
};
