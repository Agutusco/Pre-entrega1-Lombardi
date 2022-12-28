//Costo de los productos
const costoproducto1 = 2400
const costoproducto2 = 4000
const costoproducto3 = 2400
const costoproducto4 = 2800
const costoproducto5 = 3100
const costoproducto6 = 4000

let cantidadproducto1 = 0
let cantidadproducto2 = 0
let cantidadproducto3 = 0
let cantidadproducto4 = 0
let cantidadproducto5 = 0
let cantidadproducto6 = 0

//Cuantos productos quiere llevarse
while (cantidadproducto1 == 0 && cantidadproducto2 == 0 && cantidadproducto3 == 0 && cantidadproducto4 == 0 && cantidadproducto5 == 0 && cantidadproducto6 == 0) {
    cantidadproducto1 = parseInt(prompt("Ingrese cuantos juegos de COD quiere llevarse"))
    cantidadproducto2 = parseInt(prompt("Ingrese cuantos juegos de Fifa 23 quiere llevarse"))
    cantidadproducto3 = parseInt(prompt("Ingrese cuantos juegos de Lego Marvel quiere llevarse"))
    cantidadproducto4 = parseInt(prompt("Ingrese cuantos juegos de UFC 4 quiere levarse"))
    cantidadproducto5 = parseInt(prompt("Ingrese cuantos juegos de The Last of Us quiere llevarse"))
    cantidadproducto6 = parseInt(prompt("Ingrese cuantos juegos de R6 quiere llevarse"))
    if(cantidadproducto1 == 0 && cantidadproducto2 == 0 && cantidadproducto3 == 0 && cantidadproducto4 == 0 && cantidadproducto5 == 0 && cantidadproducto6 == 0){
        alert(" No selecciono ningun articulo ")
    }
}

let total = 0

function sumar() {
    total = (cantidadproducto1 * costoproducto1) + (cantidadproducto2 * costoproducto2) + (cantidadproducto3 * costoproducto3) + (cantidadproducto4 * costoproducto4) + (cantidadproducto5 * costoproducto5) + (cantidadproducto6 * costoproducto6)
    alert(" Tu costo total es de " + total )
}
sumar()
console.log(total)

//Medios de pago
let envio = prompt(" ¿Lo retiras en tienda? Habra una suma de 210$ si lo llevamos a su domicilio (Si/No) ")
if(envio == "Si" || envio =="si" || envio == "SI" ){
    total = total
}else{
    total = total + 210
}

let pagar =prompt(" ¿Pagas en efectivo? Hay un descuento de 500 pesos en efectivo. (Si/No) ")
if(pagar == "no" || pagar == "NO" || pagar == "No"){
    total= total
}else{
    total = total - 500
}
alert(" Tu nuevo costo es de " + total)
console.log(total)