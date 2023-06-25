function addNumbers(a, b) {
  return (
    a + b
  ); /*retorna a la funcion un valor especifico, que es la suma de los parametros a y b*/
}

function showAddNumbers() {
  let result = addNumbers(
    5,
    5
  ); /*a la variable result se le asigna ese valor que retorna la funcion addNumber y se le pasan 2 parametros a=5 y b=5*/
  console.log(
    `The result is ${result}`
  ); /*Se imprime en console "The result is 10, ya que 5+5 es 10."*/
}
