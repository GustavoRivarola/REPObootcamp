var cantidadDeGatos = prompt('EJERCICIO 6 Punto b - Ingrese cantidad de gatos')
var cantidadDePasos = prompt('EJERCICIO 6 Punto b - Ingrese cantidad de pasos')
var pasos = []

console.log('EJERCICIO 6 Punto b - Ingrese cantidad de gatos y cantidad de pasos')
console.log('cantidadDeGatos: ' + cantidadDeGatos)
console.log('cantidadDePasos: ' + cantidadDePasos)

for(var p = 1; p <= cantidadDePasos;  p++) {
    pasos[p] = '🐾'
}

for(var n = 1; n <= cantidadDeGatos;  n++) {
    console.log('Gato #' + n + ':' + '🐈' + pasos)
}