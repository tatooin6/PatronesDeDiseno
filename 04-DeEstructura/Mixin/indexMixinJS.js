// Mixin
let mixin = {
  saludar() {
    console.log(`Hola ${this.nombre}`);
  },
  despedir() {
    console.log(`Chao ${this.nombre}`)
  }
};

// clase
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Aumentamos el prototipo
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario(`Chanchito Feliz`)
usuario.saludar()

