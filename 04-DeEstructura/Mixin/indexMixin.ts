// Mixin
let mixin = {
  nombre: "",
  saludar() {
    console.log(`Hola ${this.nombre}`);
  },
  despedir() {
    console.log(`Chao ${this.nombre}`)
  }
};

// clase
class Usuario {
  public nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

// Aumentamos el prototipo
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario(`Chanchito Feliz`)
console.log(usuario)

