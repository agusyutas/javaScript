
const usuario="agustin";
const password="javaScript";

let persona= prompt("ingrese su usuario:");
let contraseña= prompt("ingrese su contraseña:");
while(usuario!== persona || password !== contraseña){
    console.log("usuario o contraseña son incorrectos");
    persona= prompt("ingrese su usuario:");
    contraseña= prompt("ingrese su contraseña:");
}
console.log("bienvenido");



let precios=[30000,50000,80000,10000];

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
console.log(preMayor);

console.log(preMenor);