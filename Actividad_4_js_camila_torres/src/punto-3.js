console.log('Punto Tres JS')

let Mujeres = parseInt(prompt(`Ingrese la cantidad de mujeres`))
let Hombres = parseInt(prompt(`Ingrese la cantidad de hombres`))

const cantidadTotal = Hombres + Mujeres

Mujeres = (Mujeres * 100) / cantidadTotal
Hombres = (Hombres * 100) / cantidadTotal

alert(
  `el porcentaje de mujeres es de ${Math.round(
    Mujeres
  )}% y el porcentaje de hombres es de ${Math.round(Hombres)}%`
)
