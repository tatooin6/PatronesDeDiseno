const Emmiter = require('events')

const emitter = new Emmiter()

emitter.on('lala', x => console.log(x))

emitter.emit('lala', { lala: 'lele' })
