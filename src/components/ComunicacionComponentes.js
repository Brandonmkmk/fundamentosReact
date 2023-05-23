/*-------------------------------COMUNICACION ENTRE COMPONENTES--------------------------------*/

import { useState } from "react";

/*Existen 3 casos de comunicacion entre componentes: comunicacion entre un componente padre a uno hijo, comunicacion entre un componente hijo y su padre, y comunicacion entre componentes no relacionados*/

/*Comunicacion entre un componente padre a hijo: Este es el caso mas natural en react y se hace a traves del paso de props de un componente padre a uno hijo, ejemplo:*/

export const Padre = () => {
  return (
    <div>
      {/*Aqui se le esta pasando informacion al componente Hijo a traves de props*/}
      <Hijo titulo="Comunicacion entre componentes" />
    </div>
  );
};

/*el componente hijo recibe la informacion a traves de la props 'titulo'*/

const Hijo = (props) => {
  return <h1>{props.titulo}</h1>;
};

/*-----------------------------------------------------------------------------------------------*/

/*Comunicacion entre componente hijo a padre: Se da cuando el hijo puede afectar el estado del componente padre, en este ejemplo, el componente hijo esta afectando el contador que esta en componente padre2, esta haciendo afectado el estado con el button, el button del componente hijo recibe 2 props,una que hace referencia al evento OnClick y la otra al texto que aparecera en el boton.*/

export const Padre2 = () => {
  let [saludo, setSaludo] = useState(0);
  const incremento = () => {
    setSaludo(saludo + 1);
  };
  const decremento = () => {
    setSaludo(saludo - 1);
  };
  const reiniciar = () => {
    setSaludo((saludo = 0));
  };
  return (
    <div>
      <h1>{saludo}</h1>
      <Hijo2 saludar={incremento} texto="incrementar contador" />
      <Hijo2 saludar={decremento} texto="decrementar contador" />
      <Hijo2 saludar={reiniciar} texto="reiniciar contador" />
    </div>
  );
};

/*Componente hijo que retorna un boton, dentro del onClick recibe una prop saludar que esta misma retorna una funcion que afecta el estado del componente padre*/
const Hijo2 = ({ saludar, texto }) => {
  return (
    <div>
      <button onClick={saludar}>{texto}</button>;
    </div>
  );
};
