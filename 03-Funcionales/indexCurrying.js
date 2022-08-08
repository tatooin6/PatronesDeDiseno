// Cuando no se conoce el valor de "b" en (a, b) pero eventualmente se puede conocer ese valor. (a, b) es una forma no muy buena para programacion funcional
// Curryin es la tecnica que transforma todas las funciones en funciones unarias (funciones que reciben solo un argumento)
// Primero recibe un argumento y luego el otro

// const suma = (a, b) => a + b
const suma = a => b => a + b

const suma1 = suma(1)

suma1(2)
