// modulo revelador, el ifi es lo que se encuentra entre los parentesis y termina con ()
const resultado = (() => {
  const x = {}

  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

resultado.a();
resultado.b('queso', 'cabra');
resultado.a();
console.log(resultado.x);

