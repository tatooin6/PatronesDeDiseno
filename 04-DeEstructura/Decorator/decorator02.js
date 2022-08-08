class Macbook {
    precio() { return 1000 }
}

const memoria = mac => {
  let basePrice = mac.precio()
  mac.precio = function() {
    return basePrice + 200
  }
}

const mac = new Macbook()

memoria(mac)

console.log(mac.precio())

