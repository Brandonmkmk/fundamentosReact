/*-------------------------------------EVENTOS PERSONALIZADOS-----------------------------------*/

/*para poder agregar un evento a un componente personalizado se le debe agregar a este mismo una propiedad que hara referencia a la funcion que se le pasa cuando se llama al componente, es por eso que el OnClick hace referencia a la propiedad miClick que es una funcion*/

const Boton = (props) => <button onClick={props.miClick}>Saludame</button>;

export const Solicitud = () => {
  return (
    <div>
      {/*Se devuelve el componente Boton que retorna un button de jsx, dentro del onClick se le pasa la propiedad de miClick que es una funcion que ejecuta una alerta*/}
      <Boton
        miClick={() => {
          alert("este es un evento personalizado");
        }}
      />
    </div>
  );
};
