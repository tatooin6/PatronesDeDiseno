const Emitter = (() => {
  const topics = {}
  const hOP = topics.hasOwnProperty // Definiendo un estado interno

  // API publica
  return {
    // metodo para suscribir todas las funciones que queramos a un evento especifico
    on: (topic, listener) => {
      if (!hOP.call(topics, topic)) topics[topic] = []
      topics[topic].push(listener)
    },
    // despachar las funciones con informacion especifica
    emit: (topic, info) => {
      if (!hOP.call(topics, topic)) return
      topics[topic].forEach(item => 
        item(info != undefined ? info : {}))
    }
  }
})()

Emitter.on('lala', x => console.log(x))

Emitter.emit('lala', { lala: 'lolo' })
