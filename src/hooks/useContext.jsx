/*-----------------------------------------useContext------------------------------------------*/

import { createContext, useEffect, useState } from "react";

/*se utiliza para acceder al contexto definido por el componente Context.provider. Permite a los componentes consumir valores proporcionados por el contexto sin tener que pasar props a traves de multiples niveles componentes. Ejemplo:*/

/*supongamos que este es el archivo App.js*/
function App() {
  return (
    /*el componente ViewArray tendra acceso a los valores del contexto DataContext, esto gracias a que el componente esta envuelto en el contexto que esta dentro de DataProvider*/
    <DataProvider>
      <ViewArray />
    </DataProvider>
  );
}

/*se crea el contexto en otro archivo, supongamos que este se creo en un archivo con el nombre DataContext.js*/
const DataContext = createContext();

/*Los demas componentes podran consumir los valores array y setArray, ya que en el atributo value del contexto se le esta indicando que eso es lo que se tiene que compartir*/
const DataProvider = ({ children }) => {
  const [array, setArray] = useState([]);
  <DataContext.Provider
    value={{
      array,
      setArray,
    }}
  >
    {children}
  </DataContext.Provider>;
};

/*supongamos que este archivo se llama ViewArray.js y en el se recorrera el valor array que se definio en el contexto y se visualizara en pantalla*/

const ViewArray = () => {
  /*se le indica que nos traiga los valores array y setArray del contexto que creamos con el nombre DataContext*/
  const { array, setArray } = useContext(DataContext);

  useEffect(() => {
    setArray([1, 2, 3, 4]);
  });
  if (array.length > 0) {
    array.forEach((element) => {
      <div>
        <h1>{element}</h1>
      </div>;
    });
  } else {
    return (
      <>
        <h1>el array esta vacio</h1>
      </>
    );
  }
};
