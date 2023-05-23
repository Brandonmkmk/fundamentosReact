import PropTypes from "prop-types";

/*-------------------------------------COMPONENTES EN REACT------------------------------------*/

/*Son piezas de codigo que representa una parte de interfaz de usuario de una aplicacion, los componentes son reutilizables y modulares, basicamente un componente es una funcion de JS que devuelve elementos de REACT, es decir que retornan una interfaz, si se quiere utilizar el componente se tiene que utilizar en el componente root(raiz)ejemplo:*/

// function Saludar() {
//   const edad = 17
//   /*para poder ocupar el operador ternario con react, se debe interpretar el codigo entre llaves {}*/
//  return <h1>{edad>=18?'eres mayor de edad':'eres menor de edad'}</h1>
// }

/*----------------------------------------PROPS---------------------------------------------------*/

/*Los props son propiedades que permiten a un componente recibir y utilizar datos de entrada de otro componente o del componente principal que los renderiza. Los props son objetos de JS que se pasan como atributos a los componentes de REACT y que contiene valores que se utilizan para configurar o personalizar el comportamiento o la apariencia del componente, igual se pueden aisgnar defaultProps que basicamente es el valor que toma la propiedad si esta no recibe nada, el ejempplo se ve en la propiedad direccion, si no recibe nada mostrara 'desconocida'*/

// export function Usuario({name,edad,direccion='desconocida'}){
/*dentro de este div se retornan las 3 propiedades que se le asignaron a este componente en el archivo index.js*/
//     return <div>
// <h1>{name}</h1>
// <p>{edad}</p>
// <p>Direccion: {direccion}</p>
//     </div>
// }

/*-------------------------------------------propTypes--------------------------------------------*/

// export function Boton ({text}){
//     return <button>
//         {text}
//     </button>
// }

/*Los propTypes, funciona para indicar el o los tipos de datos que son aceptados en una propiedad de un componente, por ejemplo al componente Boton en su propiedad text, se le indica que solo aceptara datos de tipo String, si se le pasa otro tipo de dato el componente marcara error, para hacer uso de los propTyoes, se necesita instalar el npm de proptypes*/

// Boton.propTypes={

/*aqui se le indica que a la prop text que solo reciba strings y que debe ser requerido, quiere decir si no se le pasa la propiedad al componente dara error*/

// text:PropTypes.string.isRequired
// }

/*----------------------------------------ESTILOS EN COMPONENTES---------------------------------*/

/*para agregar estilos se puede ocupar el atributo style que tiene cada elemento, pero se debe interpretar en condigo JS, ejemplo style={{aqui van los estilos que se quieran agregar}}, muy importante, los valores de las propiedades de los estilos deben ir entre comillas*/

/*otra manera, es creando un archivo css, y ese archivo importarlo a nuestro archivo en donde se encuentra nuestro componente, ejemplo:*/

// import './tasks.css'

//  export function TaskCard({title,realizada,fecha}){
//   return <div className='card'>
//     <h1>titulo: {title}</h1>
//     <p className={realizada==='tarea completada'?'bg-green':'bg-red'}>realizada: {realizada}</p>
//     <p>se realizo el: {fecha}</p>
//   </div>
// }
// TaskCard.propTypes={
//     title:PropTypes.string,
//     realizada:PropTypes.string,
//     fecha:PropTypes.string,
// }

/*-------------------------------------EVENT HANDLERS--------------------------------------------*/

/*Son los manejadores de eventos, nos permite hacer algo cuando ocurre un determinado evento, el ejemplo mas comun es un boton*/

/*Evento onClick, este evento ocurre cuando se le da un click a un elemento*/
//  const handleClick=()=>{
// console.log('presionaste el boton')
//  }

// export function Boton({texto}){
//   return <button onClick={handleClick}>{texto}</button>
// }

// /*Evento onChange, este se ejecuta cuando el usuario este escribiendo algo, en un input por ejemplo. */

// const handleChange=(e)=>{

//   /*Esto mostrara el valor que tiene el elemento que origino el evento. en este caso un input, asi que en la consola se registrara lo que el usuario escribio*/

// console.log(e.target.value)
// }
// export function Data(){
//   return <input onChange={handleChange}></input>
// }

/*----------------------------------------FECTH API----------------------------------------------*/

/*--------------------------------------------REACT-ICONS----------------------------------------*/

/*para poder utilizar iconos en react, necesitamos instalar el npm install react-icons en nuestro proyecto, y despues importar el modulo, en esta importacion estamos trayendo todos los iconos de la seccion bi de react-icons, y le estamos especificando que haremos uso del icono BiBarChartAlt*/

// import {BiBarChartAlt} from 'react-icons/bi'

// export const Datas=()=>{
//     return <button><BiBarChartAlt/> Obtener datos en tiempo real</button>
// }
