const perro = {
  raza: 'Kilterrier',
  // no se usa el fat-arrow porque es anonimo no se puede usar el "this"
  ladrar: function() {
    console.log(`Guau! soy un ${this.raza}`);
  }
}

// el argumento que se manda al create es el prototipo que se utiliza para que se cree el objeto
const kiltro = Object.create(perro);


kiltro.ladrar();

kiltro.raza = 'Coocker';


kiltro.ladrar();
