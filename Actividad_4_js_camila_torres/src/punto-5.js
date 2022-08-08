console.log('Punto Cinco JS')

let huevos = prompt('¿Qué tipo de huevos quiere adquirir? 1."A" o 2."AA"')

let cantidadHuevos = parseInt(
  prompt('¿Cuál es la cantidad de huevos que desea llevarse?')
)

if ((huevos = 1 && cantidadHuevos < 101)) {
  alert(`El precio es ${220 * cantidadHuevos}`)
}

if ((huevos = 1 && cantidadHuevos > 100 && cantidadHuevos < 201)) {
  alert(`El precio es ${(220 * cantidadHuevos) / 0.05}`)
}

if ((huevos = 1 && cantidadHuevos > 201 && cantidadHuevos < 301)) {
  alert(`El precio es ${(220 * cantidadHUevos) / 0.08}`)
}

if ((huevos = 1 && cantidadHuevos >= 301)) {
  alert(`El precio es ${(220 * cantidadHuevos) / 0.1}`)
}

if ((huevos = 2 && cantidadHuevos < 101)) {
  alert(`El precio es ${250 * cantidadHuevos}`)
}

if ((huevos = 2 && cantidadHuevos > 100 && cantidadHuevos < 201)) {
  alert(`El precio es ${(250 * cantidadHuevos) / 0.05}`)
}

if ((huevos = 2 && cantidadHuevos > 201 && cantidadHuevos < 301)) {
  alert(`El precio es ${(250 * cantidadHUevos) / 0.08}`)
}

if ((huevos = 2 && cantidadHuevos >= 301)) {
  alert(`El precio es ${(250 * cantidadHuevos) / 0.1}`)
}
