import { useReducer } from "react";

/*segundo parametro es el estado inicial del hook useReducer*/
const initialState = { count: 0 };

/*tipos de acciones que tendra el contador*/
const TYPES = {
  INCREMENTAR: "INCREMENTAR",
  DECREMENTAR: "DECREMENTAR",
  REINICIAR: "REINICIAR",
};

/*este es el primer parametro, que es una funcion que basicamente recibe acciones que puedan actualizar el estado del componente, esta funcion igual recibe 2 argumentos, el estado en el que nos encontramos actualmente y la accion que se a lanzado para actualizar el estado*/
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENTAR:
      return { count: state.count + 1 };
    case TYPES.DECREMENTAR:
      return { count: state.count - 1 };
    case TYPES.REINICIAR:
      return { count: (state.count = 0) };
    default:
      throw new Error();
  }
};

export const ContadorConReducer = () => {
  /*el primer parametro que recibe es una funcion reductora, es decir que es la funcion que se encargara de actualizar el estado segun la accion enviada, lo segundo que recibe como argumento es el estado inicial, asi como el useState. dispatch es la funcion que permitira actualizar el estado.*/
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state.count}
      {/*el dispatch recibe el objeto del tipo de accion que se va a lanzar, estas acciones se especificaron en la funcion reducer*/}
      <button onClick={() => dispatch({ type: TYPES.INCREMENTAR })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: TYPES.DECREMENTAR })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: TYPES.REINICIAR })}>
        reiniciar
      </button>
    </>
  );
};
