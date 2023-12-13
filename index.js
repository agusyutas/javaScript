
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

document.addEventListener('DOMContentLoaded', function () {
    const modoOscuroBtn = document.getElementById('modoOscuroBtn');
    const body = document.body;
    if (localStorage.getItem('modoOscuro') === 'activado') {
      body.classList.add('dark-mode');
    }
    modoOscuroBtn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('modoOscuro', 'activado');
      } else {
        localStorage.removeItem('modoOscuro');
      }
    });
  });


  class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const gabinete = new Producto(1, "Gabinete Corsair Obsidian", 60000, "./img/gabinete.jpg");
const gabinete2 = new Producto(2, "Gabinete Kolink Inspire", 80000, "./img/gabinete2.jpg");
const gabinete3 = new Producto(3, "Gabinete Kolink Void", 100000, "./img/gabinete3.jpg");
const gabinete4 = new Producto(4, "Gabinete Kolink Observatory", 130000, "./img/gabinete4.jpg");
const gabinete5 = new Producto(5, "Gabinete Corsair Crystal", 75000, "./img/gabinete5.jpg");
const gabinete6 = new Producto(6, "Gabinete Cooler Master", 90000, "./img/gabinete6.jpg");

const PRODUCTOS = [gabinete, gabinete2, gabinete3, gabinete4, gabinete5, gabinete6];

let carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

document.addEventListener("DOMContentLoaded", function () {
    const guardarCarritoEnLocalStorage = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    const cargarCarritoDesdeLocalStorage = () => {
        const carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
            mostrarCarritoEnDOM();
        }
    };

    const mostrarProductos = () => {
        contenedorProductos.innerHTML = "";
        PRODUCTOS.forEach(producto => {
            const card = document.createElement("div");
            card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-tom imgProducto"/>
                    <div class="card-body">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.precio}</p>
                        <button class="btn colorBoton" id="boton${producto.id}">agregar producto</button>
                    </div>
                </div>
            `;
            contenedorProductos.appendChild(card);
            const BOTON = document.getElementById(`boton${producto.id}`);
            BOTON.addEventListener("click", () => {
                agregarAlCarrito(producto.id);
            });
        });
    };

    const agregarAlCarrito = (id) => {
        const productoEnCarrito = carrito.find(producto => producto.id === id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            const producto = { ...PRODUCTOS.find(producto => producto.id === id) };
            carrito.push(producto);
        }
        console.log("Array de objetos:", PRODUCTOS);
        console.log("Producto agregado al carrito:", carrito.find(producto => producto.id === id));
        console.log("Cantidad total de productos en el carrito:", calcularCantidadTotal());

        guardarCarritoEnLocalStorage();
        mostrarCarritoEnDOM();
    };

    const calcularCantidadTotal = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    };
    const mostrarCarritoEnDOM = () => {
        if (!contenedorCarrito) {
            console.error("Elemento 'contenedorCarrito' no encontrado");
            return;
        }
        contenedorCarrito.innerHTML = "";
        carrito.forEach(producto => {
            const card = document.createElement("div");
            card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-tom imgProducto"/>
                    <div class="card-body">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.precio}</p>
                        <p>${producto.cantidad}</p>
                        <button class="btn colorBoton" id="eliminar${producto.id}">eliminar producto</button>
                    </div>
                </div>
            `;
            contenedorCarrito.appendChild(card);

 const BOTON_ELIMINAR = document.getElementById(`eliminar${producto.id}`);
     if (BOTON_ELIMINAR) {
            BOTON_ELIMINAR.addEventListener("click", () => {
                eliminarDelCarrito(producto.id);
                });
            } 
    else {
        console.error(`Botón 'eliminar${producto.id}' no encontrado`);
        }
        });
        carrito.forEach(producto => {
            console.log("Producto en el carrito:", producto);
        });
    };

const eliminarDelCarrito = (id) => {
        carrito = carrito.filter(producto => producto.id !== id);
        guardarCarritoEnLocalStorage();
        mostrarCarritoEnDOM();
    };
    if (verCarrito) {
        verCarrito.addEventListener("click", () => {
            contenedorCarrito.classList.toggle("visible");
            mostrarCarritoEnDOM();
        });
    } 
    else {
        console.error("Elemento 'verCarrito' no encontrado");
    }

    mostrarProductos();
    cargarCarritoDesdeLocalStorage();
});





  





