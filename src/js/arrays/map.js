/*El metodo map se utiliza para iterar y transformar los elementos de un arreglo y crear un nuevo arreglo con los resultados de dicha transformacion. El map crea un nuevo arreglo con los resultados de aplicar una funcion de transformacion a cada elemento del arreglo original, el arreglo original no se modifica, en su lugar devuelve un arreglo con los elementos transformados, ejemplo:*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map((n) => {
  console.loog(n);
}); //esto solo imprime los numeros del arreglo original como tal: 1,2,3,4,5,6,7,8,9,10. Es decir que no esta devolviendo un nuevo arreglo, solo esta iterando sobre el original.

duplicados = numbers.map((n) => {
  return n * 2;
});
console.log(duplicados); //esto retorna en un nuevo arreglo los numeros del arreglo original pero mulptiplicados por 2, es decir: 2,4,6,8,10,12,14,16,18,20

console.log(numbers); //imprime el arreglo original: 1,2,3,4,5,6,7,8,9,10. Ya que map no lo modifica

const developers = [
  {
    name: "Brandon",
    age: 20,
    language: "JavaScript",
  },
  {
    name: "Franq",
    age: 20,
    language: "Java",
  },
];

/*en estos momentos, names es un nuevo arreglo*/
const names = developers.map((developer) => {
  return {
    ...developers /*El spread operator basicamente nos permite copiar todos los datos que tiene un arreglo o un objeto (name,age,language) y agregarlos a otro nuevo. En este caso es un objeto y trae todos esos datos y se le agrega una nueva propiedad que se llama description. */,
    description: `Me gusta mucho ${developer.language}`,
  };
});
console.log(names); //imprime en consola: [{name:"Brandon",age:20,language:"JavaScript",description:"Me gusta mucho JavaScript"},{name"Franq,age:20,language:"Java",description:"Me gusta mucho Java"}]
