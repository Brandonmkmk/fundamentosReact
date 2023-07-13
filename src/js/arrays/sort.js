/*el método sort() en JavaScript se utiliza para ordenar los elementos de un arreglo en su lugar, es decir, modifica el arreglo original. El método sort() ordena los elementos de un arreglo alfabéticamente (por valores de cadena) o numéricamente (por valores numéricos) según el valor de Unicode de cada elemento. Por defecto, los elementos se ordenan como cadenas de texto. Ejemplo*/

const prices = [250, 120, 30, 700, 200, 170];

/*a y b hacen referencia al primer y segundo elemento del arreglo*/
const ordenedPrices = prices.sort((first, second) => {
  /*restamos second de first. Si el resultado es negativo, significa que first es menor que second y se colocará antes en el orden. Si el resultado es positivo, significa que first es mayor que second y se colocará después en el orden. Si el resultado es cero, significa que first y second son iguales y el orden se mantiene.*/
  return first - second;
});
console.log(
  prices
); /*imprime 30,120,170,200,250,700 ya que el metodo sort modifica el array original*/
console.log(
  ordenedPrices
); /*imprime 30,120,170,200,250,700 pero en un nuevo array nombrado ordenedPrices*/

/*practica: ordenar los productos por su precio barato al mas caro*/

const products = [
  {
    product: "xbox",
    price: 7000,
  },
  {
    product: "audifonos",
    price: 5500,
  },
  {
    product: "ps4",
    price: 3400,
  },
  {
    product: "memoria ssd",
    price: 2000,
  },
];

const cheapPrices = products.sort((first, second) => {
  /*si al restar first.price - second.price da un numero positivo. el segundo elemento se posicionara arriba del primero. Pero si da un numero negativo el orden se mantiene*/
  return first.price - second.price;
});
console.log(products);
console.log(cheapPrices);
