var cantidadDeGatos = prompt('EJERCICIO 6 Punto a - Ingrese cantidad de gatos')

console.log('EJERCICIO 6 Punto a - Ingrese cantidad de gatos')
console.log('cantidadDeGatos: ' + cantidadDeGatos)

i = 0

for(var n = 1; n <= cantidadDeGatos;  n++) {
    i = i + 1
    if (i === 1) console.log('Gato #' + n + ':' + '😺')
    else if (i === 2) console.log('Gato #' + n + ':' + '😸')
    else if (i === 3) console.log('Gato #' + n + ':' + '😹'), i = 0
}
