// Segunda implementacion (optimizada)
class Mackbook {
  precioBase = 1000
  precio () {
    return this.precioBase
  }
} 

const memoria = mac => {
  const valor = mac.precio()
  mac.precio = function() {
    return valor + 200
  }
}

const mackbook = new Mackbook()
console.log("Precio antes de decoracion: ", mackbook.precio())
memoria(mackbook)
console.log("Precio decorado: ", mackbook.precio())

// Primera implementacion
/*
class Mackbook {
  constructor() {
    this.precio = 1000
    this.pantalla = 11.6
  }
}

const mackbook = new Mackbook();

mackbook.agregarMemoria = function() {
  this.precio += 100;
}

// Precio original
console.log("Precio Original: ", mackbook.precio)

mackbook.agregarMemoria()

console.log("Precio Original: ", mackbook.precio)

*/
