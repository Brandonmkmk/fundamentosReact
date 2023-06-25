/*se refiere a la accesibilidad y visibilidad de variables, funciones y objetos en diferentes partes del codigo, hay 2 tipos principales de ambito: global y local.*/

/*Ambito global: las variables declaradas fuera de cualquier funcion tienen un ambito global. Estas variables son accesibles desde cualquier parte del codigo, incluyendo dentro de las funciones, ejemplo*/

let name = "Brandon"; /*variable global*/

function saludar() {
  console.log(`Hola ${name}`); /*acceso a la variable global*/
}
saludar(); /*se imprime Hola Brandon*/

/*Ambito local: Las variables declaradas dentro de una funcion tienen un ambito local. Estas variables solo son accesibles dentro de la funcion donde se declaran, ejemplo:*/

function mensaje() {
  let msj = "Hola brandon";
  console.log(msj);
}
mensaje(); /*imprime Hola brandon*/
console.log(
  msj
); /*Error: msj is not defined, no se puede hacer uso de la variable msj declarada dentro de la funcion, ya que es local y no se puede usar fuera de la funcion.*/

/*Es importante tener en cuenta que las variables locales tienen prioridad sobre las variables globales con el mismo nombre, ejemplo:*/

let numero = 5; /*variable global*/

function getNumero() {
  let numero = 10; /*variable local con el mismo nombre*/
  return numero; /*retorna la variable local*/
}

function showNumero() {
  let numero =
    getNumero(); /*se hace uso del valor especifico que retorno la funcion getNumero, el valor es un numero 10.*/
  console.log(numero); /*se imprime ese numero 10*/
}
showNumero(); /*se llama a la funcion*/

console.log(
  "tu numero es " + numero
); /*Imprime tu numero es 5, ya que es la variable global que se encuentra fuera de las funciones*/

/*En el ejemplo anterior, la función getNumero() tiene una variable local llamada nombre, que tiene prioridad sobre la variable global con el mismo nombre. Por lo tanto, dentro de la función, se retorna el valor de la variable local, mientras que fuera de la función se utiliza el valor de la variable global.*/
