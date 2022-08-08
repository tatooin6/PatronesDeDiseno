# Patrones de Diseño

## Notas y Apuntes
Cada patron cuenta con uno o mas archivos. Para poder utilizarlos se tiene que utilizar una terminal y correr el comando de node:

```bash
node index.js
```

### Que es un Patron

1. Cumple con un Objetivo
2. Es util
3. Tiene un aplicación amplia

Antipatron => leccion aprendida

### Tipos de Patrones [Addy Osmani]

1. Creacionales
	Ayudan a crear objetos, instancias de objetos
	
	CONSTRUCTOR PROTOTIPO
	Todos los metodos o propiedades que se asignen al prototipo no se van a copiar a las instancias de los objetos
	La clase object lo tienen todos los objetos en javascript
	
	PATRON MODULO (API PUBLICA)
	
	PATRON MODULO REVELADOR (API PRIVADA)
		Se puede utilizar una funcion para crear un modulo revelador, definida por un ifi
	
2. Estructura
	Entregan una interfaz para comunicar estructuras entre si

3. Comportamiento
	Ayudan a lograr desacoplar el codigo para tener codigo mas facil de mantener
	
	
CLOSURES
	Funcionalidad de JS que permite reutilizar codigo 
	Ver el alcance de las funciones en JS
	
	
