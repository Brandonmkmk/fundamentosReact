/*El metodo find nos permite buscar UN elemento dentro de un array. Cabe recalcar que este metodo solo nos devuelve el primer elemento que cumpla con cierta condicion. Por ejemplo si yo quiero todo el objeto en donde el nombre de un estudiante es Brandon, quedaria asi: */

const students = [
  {
    name: "Angela",
    age: 20,
  },
  {
    name: "Iker",
    age: 10,
  },
  {
    name: "Pris",
    age: 40,
  },
  {
    name: "Brandon",
    age: 20,
  },
  {
    name: "Sonia",
    age: 50,
  },
  {
    name: "Brandon",
    age: 39,
  },
];

const studentSelected = students.find((student) => {
  return student.name == "Brandon";
});

console.log(studentSelected); //imprime el primer objeto que se encontro con el valor Brandon dentro de la propiedad name, que es: {name:"Brandon",age:20}. Puedo hacer uso de todas las propiedades de este objeto
