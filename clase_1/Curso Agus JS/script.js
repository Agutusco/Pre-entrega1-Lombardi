// Costo de los productos de videojuegos
const costoproducto1 = 2400
const costoproducto2 = 4000
const costoproducto3 = 2400
const costoproducto4 = 2800
const costoproducto5 = 3100
const costoproducto6 = 4000
const costoproducto7 = 4000
const costoproducto8 = 3800
const costoproducto9 = 3000


let cantidadproducto1
let cantidadproducto2
let cantidadproducto3
let cantidadproducto4
let cantidadproducto5
let cantidadproducto6
let cantidadproducto7
let cantidadproducto8
let cantidadproducto9


// Cuantos productos quiere llevarse
function catalogo() {
do{ 
    cantidadproducto1 = parseInt(prompt("Ingrese cuantos juegos de COD quiere llevarse"))
    cantidadproducto2 = parseInt(prompt("Ingrese cuantos juegos de Fifa 23 quiere llevarse"))
    cantidadproducto3 = parseInt(prompt("Ingrese cuantos juegos de Lego Marvel quiere llevarse"))
    cantidadproducto4 = parseInt(prompt("Ingrese cuantos juegos de UFC 4 quiere levarse"))
    cantidadproducto5 = parseInt(prompt("Ingrese cuantos juegos de The Last of Us quiere llevarse"))
    cantidadproducto6 = parseInt(prompt("Ingrese cuantos juegos de R6 quiere llevarse"))
    cantidadproducto7 = parseInt(prompt("Ingrese cuantos juegos de Assasin´s Creed quiere llevarse"))
    cantidadproducto8 = parseInt(prompt("Ingrese cuantos juegos de Red Dead Redemption 2 quiere llevarse"))
    cantidadproducto9 = parseInt(prompt("Ingrese cuantos juegos de GTA quiere llevarse"))
}while (cantidadproducto1 == 0 && cantidadproducto2 == 0 && cantidadproducto3 == 0 && cantidadproducto4 == 0 && cantidadproducto5 == 0 && cantidadproducto6 == 0 && cantidadproducto7 == 0 && cantidadproducto8 == 0 && cantidadproducto9 == 0) {
    if(cantidadproducto1 == 0 && cantidadproducto2 == 0 && cantidadproducto3 == 0 && cantidadproducto4 == 0 && cantidadproducto5 == 0 && cantidadproducto6 == 0 && cantidadproducto7 == 0 && cantidadproducto8 == 0 && cantidadproducto9 == 0){
        alert(" No selecciono ningun articulo ")
                }
        }
    }catalogo()


let total1 = 0
function sumar() {
    total1 = (cantidadproducto1 * costoproducto1) + (cantidadproducto2 * costoproducto2) + (cantidadproducto3 * costoproducto3) + (cantidadproducto4 * costoproducto4) + (cantidadproducto5 * costoproducto5) + (cantidadproducto6 * costoproducto6) + (cantidadproducto7 * costoproducto7) + (cantidadproducto8 * costoproducto8) + (cantidadproducto9 * costoproducto9)
    alert(" Tu costo total es de " + total1 )
}
sumar()
console.log(total1)


class Producto{
    constructor(nombre,precio,){
        this.nombre = nombre
        this.precio = parseInt(precio)
    }
    enviar(){
        this.precio = this.precio + 210
    }
    pago(){
        this.precio = this.precio - 500
    }
}
const productos = []
productos.push(new Producto( " COD ", 2400))
productos.push(new Producto( " Fifa 23 ", 4000))
productos.push(new Producto( " Lego marvel ", 2400))
productos.push(new Producto( " UFC ", 2800,))
productos.push(new Producto( " The Last of Us ", 3100))
productos.push(new Producto( " R6 ", 4000))
productos.push(new Producto( " Assasin´s Creed", 4000))
productos.push(new Producto( " Red Dead Redemption 2", 3800))
productos.push(new Producto( "GTA", 3000))

console.log(productos)
// Filtro
const PreciosBaratos = productos.filter((el) => el.precio > 3000)
console.log(PreciosBaratos)
const PreciosCaros = productos.filter((el) => el.precio < 3100)
console.log(PreciosCaros)
// Costo de los productos de consolas y controles

let prod1 = 17.000
let prod2 = 180.000
let prod3 = 220.000
let prod4 = 17.000
let prod5 = 210.000
let prod6 = 300.000

let total2


const prods = [{
    prod: "Control Playstation 4",
    precio: 17000
    },
    {
        prod: "Playstation 4",
        precio: 180000
    },
    {
        prod: "Nintendo Switch",
        precio: 220000
    },
    {
        prod: "Control Xbox One",
        precio: 17000
    },
    {
        prod: "Xbox One",
        precio: 210000
    },
    {
        prod: "Consola Arcade",
        precio: 300000
    }
]



total2 = 0
function consolas() {
while (true){
    let opcion = parseInt(prompt( " ¿Que consola o control desea comprar? Elige un número:(Si no desea nada presione 0) \n\
    1-Control playstation 4 \n\
    2-Playstation 4 \n\
    3-Nintendo Switch \n\
    4-Control Xbox One \n\
    5-Xbox One \n\
    6-Consola Arcade"))
    if (opcion >= 1 && opcion <= 6) {
        let cantidad = parseInt(prompt(`Cuantos ${prods[opcion - 1].prod} desea comprar`))
        let subtotal = cantidad * prods[opcion - 1].precio
        total2 += subtotal
        alert( "Tu costo total es de " + (total2 + total1))
        break;
    }else if (opcion == 0){
        break;
    }
}
}
consolas()

let totalfinal1 = (total1 + total2)
console.log(totalfinal1)
console.log(prods)



// // Medios de pago
let total3 = 0
let envio
do {
    envio = prompt(" ¿Lo retiras en tienda? Habra una suma de 210$ si lo llevamos a su domicilio (Si/No) ")
    if (envio != "si" && envio != "SI" && envio != "Sí" && envio != "NO" && envio != "No" && envio != "no") {
        alert( " No pusiste lo especificado ")
    }else{
        if (envio == "si" || envio == "SI" || envio == "Si" ) {
            totalfinal1 = totalfinal1
        }else{
            totalfinal1 = totalfinal1 + 210
            for (const producto of productos) {
                producto.enviar()
            }
        }
    }
} while (envio != "si" && envio != "SI" && envio != "Si" && envio != "NO" && envio != "No" && envio != "no");

console.log(envio)

let pagar
do{
    pagar = prompt( " ¿Pagas en efectivo? Hay un descuento de 500$ en efectivo (Si/No) ")
    if (pagar != "si" && pagar != "SI" && pagar != "Sí" && pagar != "NO" && pagar != "No" && pagar != "no" ) {
        alert(" No pusiste lo especificado ")
    }else{
        if (pagar == "si" || pagar == "SI" || pagar == "Si" ) {
            totalfinal1 = totalfinal1 - 500
        }else{
            totalfinal1 = totalfinal1
            for (const producto of productos) {
                producto.pago()
            }
        }
    }
}while(pagar != "si" && pagar != "SI" && pagar != "Si" && pagar != "NO" && pagar != "No" && pagar != "no")

console.log (pagar)
console.log(totalfinal1)
alert(" tu nuevo costo es de " + totalfinal1)




