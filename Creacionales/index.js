class MiClase {
  constructor(p1, p2) {
    this.propiedad = p1;
    this.propiedad2 = p2;
    this.metodo = () => {
      // lo que hace el metodo
    }
  }
}

// No muestra los metodos cuando se lo imprime por consola
class MiClaseConPrototipo {
  constructor(p1, p2) {
    this.propiedad = p1;
    this.propiedad2 = p2;
    
  }
  metodo() {
    // soy un metodo de prototipo  
  }
}
// const instancia = new MiClase(4, 3);
const instancia = new MiClaseConPrototipo(4, 3);
console.log(instancia);
