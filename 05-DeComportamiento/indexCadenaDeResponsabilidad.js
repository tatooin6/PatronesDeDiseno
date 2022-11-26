class Suma {
  constructor(v){
    this.val = 1;
  }

  suma(v) {
    this.val += v;
    return this;
  }
}

const valor = new Suma(1);
console.log(valor
  .suma(1)
  .suma(2)
  .suma(3)
  .suma(4)
  .val
)
