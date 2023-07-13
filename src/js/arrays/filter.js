/*El metodo filter itera y crea un nuevo arreglo que contenga solo los elementos del arreglo original que cumplan con cierta condicion. El metodo filter no modifica el arreglo original. Ejemplo*/

const products = [
  {
    product: "lavadora",
    price: 200,
  },
  {
    product: "licuadora",
    price: 250,
  },
  {
    product: "colchon",
    price: 700,
  },
];

const cheapProducts = products.filter((product) => {
  return product.price < 700; //retorna en un nuevo arreglo (cheapProducts) los elementos del arreglo original (products) que en su propiedad precio sean menor a 700
});
console.log(cheapProducts); //imprime el product lavadora y licuadora, ya que su price es menor a 700
