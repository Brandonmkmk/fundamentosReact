import React from "react";
/*Biblioteca que funciona para manipular el dom*/
import ReactDom from "react-dom/client";
/*trae los componentes Sumar y Usuario del archivo exports.js*/
// import { TaskCard, Data, datas, Actualizar } from "./exports";

import { ContadorConReducer } from "./hooks/useReducer";

/*se hace referencia al div root, que es donde se despliega toda la aplicacion web*/
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <ContadorConReducer />
  </>
);
