class Macbook {
  constructor(){
    this.precio = 1000
    this.pantalla = 11.9
  }
}

const mac = new Macbook()

mac.agregarMemoria = function() {
  this.precio += 100
}

mac.agregarMemoria()

console.log(mac.precio)

