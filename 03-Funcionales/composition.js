const users = [
  {edad: "4", nombre: "Peter", apellido: "Parker"},
  {edad: "33", nombre: "Juan", apellido: "Pasten"},
  {edad: "12", nombre: "Shamir", apellido: "Alvarez"},
  {edad: "2", nombre: "Jasir", apellido: "Yucra"},
]

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const format = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})
  
const getResultString = x => `${x.nombreCompleto} tiene ${x.edad} años`

const traePrimerInfante = compose(
    getResultString,
    format,
    head,
    filter(x => x.edad < 6)
  )

  // getResultString(format(head(data.filter(x => x.edad < 6))))

