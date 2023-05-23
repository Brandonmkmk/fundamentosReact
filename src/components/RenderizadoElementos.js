// import usuarios from "./usuarios.json";

// {
//   /*componente ListaUsers, recibe una propiedad user que hace referencia al elemento recorrido del JSON, es por eso que desde aqui se accede al nombre*/
// }

// const ListaUsers = ({ nombre, apellidos, status }) => {
//   return (
//     <div>
//       <h1>{nombre.nombre}</h1>
//       <h1>{apellidos.apellidos}</h1>
//       <h1>{status.status}</h1>
//     </div>
//   );
// };

// export const RenderizadoE = () => {
//   {
//     /*Array a renderizar*/
//   }
//   const estaciones = ["primavera", "verano", "invierno"];
//   return (
//     <div>
//       <h1>Renderizado de elementos</h1>

//       {/*Se recorre cada elemento con un map del arreglo y renderiza el valor en un elemento h1*/}

//       {estaciones.map((estacion) => {
//         return <h1>{estacion}</h1>;
//       })}
//       <hr />

//       {/*Se renderiza el componente ListaUsers que en el se retorna un h1 que se le pasan propiedades como nombre,apellidos y status que estas reciben el elemento que actualmente esta recorriendo el metodo map*/}
//       <h1>Renderizado de componentes</h1>
//       <div>
//         {usuarios.usuarios.map((el) => {
//           return <ListaUsers nombre={el} apellidos={el} status={el} />;
//         })}
//       </div>
//     </div>
//   );
// };
