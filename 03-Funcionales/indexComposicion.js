const users = [
  {edad: "4", nombre: "Peter", apellido: "Parker"},
  {edad: "33", nombre: "Juan", apellido: "Pasten"},
  {edad: "12", nombre: "Shamir", apellido: "Alvarez"},
  {edad: "2", nombre: "Alex", apellido: "Yucra"},
]

// Compose
// Compose lo unico que recibe son funciones (...fns) toma todos los argumentos y los transforma en un arreglo
// La segunda vez que se llame recibira un "x" que sera el input principal de lo que se esta componiendo
// Luego se llama a reduceRight que trabaja de derecha a izquierda
// y son las funciones acumuladas, y f la funcion que se esta iterando
// "x" toma el valor de "y" por lo que lo primero que haga sera f(x) y eso sera "y" nuevamente
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y) ,x)

// Pipe
// Utiliza la misma implementacion del compose pero de arriba a abajo
const pipe = (...fns) => x => fns.reduce((y, f) => f(y) ,x)

// Trace
const trace = x = y => console.log(x, y)

// Filter: se crea una funcion donde se le pasa otra funcion que filtrara los datos, lo que sea que haga f se aplicara en el arreglo de xs
const filter = f => xs => xs.filter(f)

// Toma al primer infante
const head = xs => xs[0]

// Retorna un objeto con nombre completo y edad
const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
})

// Da el formato final del infante
const formato = x => `${x.nombreCompleto} tiene ${x.edad} ano(s)`

const traePrimerInfante = pipe(
  filter(x => x.edad < 2),
  trace('despues de filter'),
  head,
  formateo,
  formato,
) 

/*
 *
const traePrimerInfante = compose(
  formato,
  formateo,
  head,
  filter(x => x.edad < 2),
) 
 * */

/* // La funcion tiene esta variacion porque hace un currying llamando a x y se le debe pasar (data)como segundo argumento
 * pero por el point free entonces se la puede reducir a simplemente compose
const traePrimerInfante = data => 
  compose(
    formato,
    formateo,
    head,
    xs => xs.filter(x => x.edad < 2),
  )(data) 
*/
