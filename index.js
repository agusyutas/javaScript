
const usuario="agustin";
const password="javaScript";

let persona= prompt("ingrese su usuario:");
let contraseña= prompt("ingrese su contraseña:");
while(usuario!== persona || password !== contraseña){
    console.log("usuario o contraseña son incorrectos");
    persona= prompt("ingrese su usuario:");
    contraseña= prompt("ingrese su contraseña:");
}
alert("bienvenido!!");


let precios=[60000,130000,80000,100000,75000,90000];

let preMayor= precios[0];
let preMenor= precios[0];
for (let i=0; i<precios.length; i++){
    if(precios[i]>preMayor){
        preMayor=precios[i];
    }
    if(precios[i]<preMenor){
        preMenor=precios[i];
    }
}
console.log("El precio mayor es: " + preMayor);
console.log("El precio menor es: " + preMenor);


let stock = [
    {
        producto: "Gabinete Corsair Obsidian",
        precio: "$60.000",
        categoria: "gabinete",
    },
    {
        producto: "Gabinete Kolink Inspire",
        precio: "$80.000",
        categoria: "gabinete",
    },
    {
        producto: "Gabinete Kolink Void",
        precio: "$100.000",
        categoria: "gabinete",
    },
    {
        producto: "Gabinete Kolink Observatory",
        precio: "$130.000",
        categoria: "gabinete",
    },
    {
        producto: "Gabinete Corsair Crystal",
        precio: "$75.000",
        categoria: "gabinete",
    },
    {
        producto: "Gabinete Cooler Master",
        precio: "$90.000",
        categoria: "gabinete",
    }
];

console.log(stock);



function aplicarDescuento(preArticulo){
    let precioFinal = preArticulo;

    if(preArticulo <= 100000){
        let montoDesc = (preArticulo * 10)/ 100;
        precioFinal = preArticulo - montoDesc;
    }

    if(preArticulo > 100000){
        let montoDesc = (preArticulo * 15)/ 100;
        precioFinal = preArticulo - montoDesc;
    }
   return precioFinal;
}
console.log( "el precio del producto con el descuento aplicado es de: " + aplicarDescuento(130000));


const CARRITO =[
    {
        producto: "Gabinete Corsair Obsidian",
        precio: 60000
    },
    {
        producto: "Gabinete Kolink Inspire",
        precio: 80000
    },
    {
        producto: "Gabinete Kolink Void",
        precio: 100000
    },
]
let precioTotal = 0;
for(const item of CARRITO){
    precioTotal += item.precio;
}
console.log("el precio total del carrito es: $" + precioTotal)


let gabinetes = ["Gabinete Corsair Obsidian","Gabinete Kolink Inspire","Gabinete Kolink Void","Gabinete Kolink Observatory","Gabinete Corsair Crystal","Gabinete Cooler Master"];

let indice = gabinetes.indexOf("Gabinete Kolink Void");
console.log("el indice del gabinete es: "+ indice);

