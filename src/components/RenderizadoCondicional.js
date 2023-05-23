/*------------------------------RENDERIZADO CONDICIONAL----------------------------------------*/

/*El renderizado condicional en ReactJS es una técnica que permite mostrar u ocultar elementos de la interfaz de usuario (UI) en función de una condición determinada. Esto significa que, en lugar de renderizar un elemento todo el tiempo, se renderiza solo si se cumple una determinada condición. Esto mejora el rendimiento de la aplicación, ya que se evita renderizar componentes innecesarios.*/

const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("has iniciado sesion correctamente");
        }}
      >
        Iniciar sesion
      </button>
    </div>
  );
};

const Logout = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("hasta luego, vuelve pronto");
        }}
      >
        Cerrar sesion
      </button>
    </div>
  );
};

export const Renderizado = () => {
  /*Varible que sirve para hacer el renderizado condicional*/
  const active = false;
  return (
    <div>
      <h1>Renderizado condicional</h1>
      {/*si la variable active esta en true, se mostrara el componente Logout, pero si esta en false se mostrara ek componente Login*/}
      {active ? <Logout /> : <Login />}
    </div>
  );
};
