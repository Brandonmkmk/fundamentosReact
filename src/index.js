import React from "react";
/*Biblioteca que funciona para manipular el dom*/
import ReactDom from "react-dom/client";
/*trae los componentes Sumar y Usuario del archivo exports.js*/
// import { TaskCard, Data, datas, Actualizar } from "./exports";

import { Renderizado } from "./components/RenderizadoCondicional";
import { RenderizadoE } from "./components/RenderizadoElementos";
import { Solicitud } from "./Eventos";
import { Padre } from "./components/ComunicacionComponentes";
import { Padre2 } from "./components/ComunicacionComponentes";
// import { Saludar } from "./ComunicacionComponentes";
import { MiComponente } from "./hooks/UseEffect";
import { Ajax } from "./AjaxApis";
// import { Reloj } from "./UseEffect";
import { Customs } from "./hooks/CutomsHooks";
import { Referencias } from "./hooks/UseRef";
import { Formularios } from "./Formularios";
import { Words } from "./hooks/UseEffect";

/*se hace referencia al div root, que es donde se despliega toda la aplicacion web*/
const root = ReactDom.createRoot(document.getElementById("root"));

/*funciona para agregar elementos dentro de la aplicaciom. es decir que espera elementos HTML, en este caso se le agrega el componente saludar que retorna un div,siempre debe de haber un elemento padre que contenga al resto, si el componente se llama por su tag <saludar></saludar> ocurrira un error, ya que se debe poner un elemento padre antes, si no se quiere poner un elemento padre, react nos proporciona la etiqueta fragment, que basicamente es esta <></>, ejemplo:*/
root.render(
  <>
    <Renderizado />
    <hr />
    <RenderizadoE />
    <hr />
    <Solicitud />
    <hr />
    <Padre />
    <Padre2 />
    <hr />
    <MiComponente />
    <hr />

    <hr />

    <hr />
    <Ajax />
    <hr />
    <Customs />
    <hr />
    <Referencias />
    <hr />
    <Formularios />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>Siguiente seccion</h1>
    <br />
    <Words />
    <br />
  </>
);
