const Commander = (() => {
  const o = {
    comprar: x => {
      console.log(`Comprando ${x}`);
    },
    vender: x => {
      console.log(`Vendiendo ${x}`);
    }
  }

  return {
    run: (comando, argumentos) => {
      if(!o[comando]) {
        console.error(`No se encuentra el comando [${comando}]`);
        return;
      }

      o[comando](argumentos)
    }
  }
})()

// Ejecucion

Commander.run('vender', 'Mazda');
Commander.run('comprar', 'Hummer');
Commander.run('Truequear', 'Mitsubishi');
