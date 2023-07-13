/*Se utiliza para iterar sobre los elementos de un array y combinarlos en un solo valor, permite realizar una operacion en cada elemento del array y acumular el resultado en un unico valor, cabe recalcar que este metodo no devuelve un nuevo arreglo. Ejemplo:*/

const miCarrito = [
  {
    product: "Xbox",
    price: 4500,
  },
  {
    product: "audifonos",
    price: 340,
  },
  {
    product: "Disco duro",
    price: 936,
  },
];

const finallyPrice = miCarrito.reduce((total, product) => {
  return total + product.price; //total es el valor inicial(0), product.price es el precio justo ahora del momento que se esta recorriendo el arreglo, es decir que en el primer recorrido se suma 0 que es el valor inicial + el price del primer producto que es 4500, entonces 4500 pasa a ser el total, en el segundo recorrido se suma total que es 4500 + el price del segundo producto que es 340, el resultado es 4840, 4840 pasa a ser el total y se suma 4840 + el price del tercer producto que es 936, el resultado final es = 5576
}, 0);

console.log(finallyPrice); //imprime 5576

/*En el ejemplo de abajo tenemos que crear un array que contenga todas las skills de cada developer, dichas skills se tienen que guardar en un solo arreglo*/

const developers = [
  {
    name: "Brandon",
    skills: ["HTML", "React", "JavaScript", "Java"],
  },
  {
    name: "Franq",
    skills: ["HTML", "CSS", "React", "JavaScript", "Redux", "NodeJs"],
  },
  {
    name: "Iker",
    skills: ["HTML", "CSS", "React", "JavaScript", "Redux", "NodeJs"],
  },
];

/*allSkills es el valor inicial que es un arrego vacio, developer es el developer que se esta iterando al momento*/
const skills = developers.reduce((allSkills, developer) => {
  /*...allSkills copia los datos del valor inicial, pero como es un arreglo vacio se mantiene asi,a ese arreglo se le concatenan los skills del primer developer que son HTML,React,JavaScript y Java. Ahora allSkills es un arreglo con esos datos ya antes mencionados. Ahora se le concatenan los skills del segundo developer que son HTML,CSS,React,JavaScript,Redux,NodeJs. Ahora allSkills es un arreglo con las skills del primer developer y del segundo. y asi sucesivamente*/
  return [...allSkills, ...developer.skills];
}, []);
console.log(skills); //imprime:[ "HTML", "React", "JavaScript", "Java","HTML", "CSS", "React", "JavaScript", "Redux", "NodeJs","HTML", "CSS", "React", "JavaScript", "Redux", "NodeJs"]
