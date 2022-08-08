// Programacion Tacita o de punto libre
// Nos olvidamos de los argumentos de una funcion
// Tecnica utilizada cuando se quiere utilizar composicion

const f = (ruta, cb) => {
  const resultado = computacionPesada()
  cb(resultado)
}

f('/users', () => {

})

app.get('/users', (req, res) => {

})
