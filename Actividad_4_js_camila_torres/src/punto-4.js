console.log('Punto Cuatro JS')

let num1 = prompt('Ingrese el primer número')

num1 = parseInt(num1)

let num2 = prompt('Ingrese el segundo número')
num2 = parseInt(num2)

let dividir = num1 / num2

let multiplicacion = num1 * num2

let resta = num1 - num2

let suma = num1 + num2

let proceso = parseInt(
  prompt(
    'Ingrese la operación que desea 1.division, 2.multiplicacion, 3.resta, 4.suma'
  )
)

if (proceso === 1) {
  alert(`la division es  ${dividir}`)
} else if (proceso === 2) {
  alert(`la multiplicacion es ${multiplicacion}`)
} else if (proceso === 3) {
  alert(`la resta es ${resta}`)
} else if (proceso === 4) {
  alert(`la suma es ${suma}`)
} else {
  console.error('Ingrese la operación válida')
}
