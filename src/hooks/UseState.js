// /*-------------------------------------Use State------------------------------------------------*/

// /*Permite definir una variable de estado y una funcion para actualizar esa variable, para hacer uso de use state se tiene que imortar esa funcion*/

// // import React, { useState } from "react";

// // export function Actualizar()

// {
//   /*count es la variable de estado y setCount es la funcion que hara que la variable se actualize, se le indica al useState que el valor inicial del componente es 0*/
// }

// //   let [count, setCount] = useState(0);
// //   let [saludo, setSaludo] = useState("");
// //   return (
// //     <div>
// //       <p>contador: {count}</p>

// {
//   /*Cada vez que se le hace click al boton se llama a la funcion setCount y a la variable count que esta inicializada en 0 se le suma 1*/
// }

// //       <button
// //         onClick={() => {
// //           setCount(count + 1);
// //         }}
// //       >
// //         Pulsa click para incrementar
// //       </button>
// //       <button
// //         onClick={() => {
// //           setCount(count - 1);
// //         }}
// //       >
// //         Pulsa click para decrementar
// //       </button>
// //       <button
// //         onClick={() => {
// //           setCount((count = 0));
// //         }}
// //       >
// //         Pulsa click reiniciar el contador
// //       </button>
// //       <hr></hr>

// //       {/*El valor que se escribe en en el input se guarda en la variable saludo del useState, esto gracias al onChange y al e.target.value*/}

// //       <input onChange={(e) => setSaludo(e.target.value)}></input>
// //       <button
// //         onClick={() => {
// //           alert("Hola " + saludo);
// //         }}
// //       >
// //         pulsa click para que te salude
// //       </button>
// //     </div>
// //   );
// // }
