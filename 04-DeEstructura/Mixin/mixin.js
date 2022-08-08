let mixing = {
  saludar() {
    console.log(`Hola ${this.name}`)
  },
  despedir() {
    console.log(`Adios ${this.name}`)
  }
}

class Usuario {
  constructor(name){
    this.name = name
  }
}

Object.assign(Usuario.prototype, mixing)

let firstUser = new Usuario('Peter Griffin')
firstUser.saludar()
