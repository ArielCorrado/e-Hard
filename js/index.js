class memoriaRam {
    constructor ( descripcion, marca, modelo, tipo, capacidad, frecuencia, precio, imgScr, cantidad ) {
        this.descripcion = descripcion;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;
        
        this.opcionesBusqueda = "Marca,Modelo,Tipo,Capacidad,Frecuencia,Mostrar Todo".split(",");

        this.describir = () => {
            return (`${this.marca} ${this.modelo} ${this.tipo} ${this.capacidad} ${this.frecuencia} <b>$${this.precio}</b>`);
        } 

    }
 
}

class motherboard {
    constructor ( descripcion, marca, modelo, socket, memoria, precio, imgScr, cantidad) {
        this.descripcion = descripcion;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.memoria = memoria;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;
    
        this.opcionesBusqueda = "Marca,Socket,Memoria,Mostrar Todo".split(","); 

        this.describir = () => {
            return (`${this.marca} ${this.modelo} ${this.socket} ${this.memoria} <b>$${this.precio}</b>`);
        } 

    }
 
}

class micro {
    constructor ( descripcion, marca, modelo, socket, frecuencia, precio, imgScr, cantidad) {
        this.descripcion = descripcion;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;

        this.opcionesBusqueda = "Marca,Socket,Frecuencia,Mostrar Todo".split(","); 
    
        this.describir = () => {
            return (`${this.marca} ${this.modelo} ${this.socket} ${this.frecuencia} <b>$${this.precio}</b>`);
        } 

    }

}

                                //Cargamos los productos
const listaMicros = [];

listaMicros[0] = new micro ("Microprocesadores", "Amd", "Ryzen 3 4100", "AM4", "4.0Ghz", 20900, "./images/amd0.jpeg");
listaMicros[1] = new micro ("Microprocesadores", "Amd", "Ryzen 3 4350G", "AM4", "4.0Ghz", 32900, "./images/amd1.jpeg");
listaMicros[2] = new micro ("Microprocesadores", "Amd", "Ryzen 5 3600", "AM4", "4.2Ghz", 42400, "./images/amd2.jpeg");
listaMicros[3] = new micro ("Microprocesadores", "Amd", "Ryzen 5 5500", "AM4", "4.2Ghz", 46800, "./images/amd3.jpeg");
listaMicros[4] = new micro ("Microprocesadores", "Amd", "Ryzen 7 5700X", "AM4", "4.6Ghz", 66000, "./images/amd4.jpeg");
listaMicros[5] = new micro ("Microprocesadores", "Amd", "Ryzen 9 5900X", "AM4", "4.8Ghz", 110000, "./images/amd5.jpeg");
listaMicros[6] = new micro ("Microprocesadores", "Intel", "Celeron G6900", "LGA1700", "3.8Ghz", 12000, "./images/intel0.jpeg");
listaMicros[7] = new micro ("Microprocesadores", "Intel", "Pentium G7400", "LGA1700", "3.8Ghz", 15600, "./images/intel1.jpeg");
listaMicros[8] = new micro ("Microprocesadores", "Intel", "Core i3 12100", "LGA1700", "4.3Ghz", 34500, "./images/intel2.jpeg");
listaMicros[9] = new micro ("Microprocesadores", "Intel", "Core i5 12400", "LGA1700", "4.4Ghz", 51000, "./images/intel3.jpeg");
listaMicros[10] = new micro ("Microprocesadores", "Intel", "Core i7 12700KF", "LGA1700", "5.0Ghz", 87900, "./images/intel4.jpg");
listaMicros[11] = new micro ("Microprocesadores", "Intel", "Core i9 12900KF", "LGA1700", "5.2Ghz", 147719, "./images/intel5.jpeg");



const listaMothers = [];

listaMothers[0] = new motherboard ("Motherboards", "Gigabyte", "GA-B450M DS3H", "AM4", "DDR4", 18000, "./images/mb0.jpeg");
listaMothers[1] = new motherboard ("Motherboards", "Gigabyte", "GA-A520M S2H", "AM4", "DDR4", 19900, "./images/mb1.jpeg");
listaMothers[2] = new motherboard ("Motherboards", "Gigabyte", "GA-B550M DS3H", "AM4", "DDR4", 32000, "./images/mb2.jpeg");
listaMothers[3] = new motherboard ("Motherboards", "Gigabyte", "GA-X570S UD", "AM4", "DDR4", 64800, "./images/mb3.jpeg");
listaMothers[4] = new motherboard ("Motherboards", "Gigabyte", "GA-X570S AORUS ELITE", "AM4", "DDR4", 95000, "./images/mb4.jpeg");
listaMothers[5] = new motherboard ("Motherboards", "Msi", "PRO H610M", "LGA1700", "DDR4", 18200, "./images/mb5.jpg");
listaMothers[6] = new motherboard ("Motherboards", "Msi", "PRO H610M-G", "LGA1700", "DDR4", 20000, "./images/mb6.jpeg");
listaMothers[7] = new motherboard ("Motherboards", "Msi", "PRO B660M-G", "LGA1700", "DDR4", 25800, "./images/mb7.jpg");
listaMothers[8] = new motherboard ("Motherboards", "Msi", "PRO Z690-A", "LGA1700", "DDR4", 47900, "./images/mb8.jpeg");
listaMothers[9] = new motherboard ("Motherboards", "Msi", "Z690 Tomahawk WiFi", "LGA1700", "DDR4", 64900, "./images/mb9.jpeg");



const listaMemorias = [];

listaMemorias[0] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "4gb", "2666mhz", 4940, "./images/mr0.jpeg");
listaMemorias[1] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "4gb", "3200mhz", 7900, "./images/mr0.jpeg");
listaMemorias[2] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "8gb", "2666mhz", 7450, "./images/mr0.jpeg");
listaMemorias[3] = new memoriaRam ("Memorias RAM", "kingston", "fury Rgb", "ddr4", "8gb", "2666mhz", 9999, "./images/mr1.jpeg");
listaMemorias[4] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "8gb", "3200mhz", 9250, "./images/mr0.jpeg");
listaMemorias[5] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "16gb", "2666mhz", 13600, "./images/mr0.jpeg");
listaMemorias[6] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "16gb", "3200mhz", 16700, "./images/mr0.jpeg");
listaMemorias[7] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "16gb", "3600mhz", 19000, "./images/mr0.jpeg");
listaMemorias[8] = new memoriaRam ("Memorias RAM", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "2666mhz", 20500, "./images/mr2.jpeg");
listaMemorias[9] = new memoriaRam ("Memorias RAM", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "3600mhz", 24000, "./images/mr3.jpeg");


let opciones;
let botonesOpciones;
let opcionElegida;
let opcionElegida2;
let instancia;
let productoElegido;
let carrito = [];
let total = 0;
let cant;


inicio ();

function inicio () {
    instancia = 0;
    filtro = [];
    filtro = filtro.concat (listaMicros, listaMothers, listaMemorias);

    document.getElementById("general").innerHTML = `    <div class="flex"><h2 id="mensaje"></h2></div>
                                                        <div class="opcionesCont flex" id="opciones"></div> 
                                                        <div class="flex" id="productoImagen"></div>
                                                        <div class="flex prodDesc"><p id="hasElegido"></p><h1 id="productoDesc"></h1></div>
                                                        <div class="flex" id="prodCantCont"></div>
                                                        <div class="flex" id="cantEx"></div>`

    mostrarMensaje ("Bienvenido a e-Hard Computación. A continuación podrás buscar y elegir hardware para tu PC. Elige alguna opción de busqueda:")
    opciones = cargarOpciones("descripcion", filtro);           //Cargamos opciones de busqueda por la propiedad "descripción"
    mostrarOpciones (opciones);
}

function leerOpciones () {
    if (instancia == 0) {
        opcionElegida = this.previousElementSibling.innerHTML;
        mostrarMensaje(opcionElegida);
        filtro = filtro.filter((el) => el.descripcion == opcionElegida);   //Acá pueden quedar por ejemplo las "memorias RAM"
        opciones = filtro[0].opcionesBusqueda;  //Cargamos las opciones de busqueda del primer elemento de la lista
        mostrarOpciones (opciones);             //opciones es un array de strings
        instancia ++;
    } else if (instancia == 1) {
        opcionElegida2 = this.previousElementSibling.innerHTML;            //Acá la opción elegida puede ser por Ej: "Marca" 

        if (opcionElegida2.toLowerCase() != "mostrar todo") {
            mostrarMensaje(opcionElegida2);
            opcionElegida2 = opcionElegida2.toLowerCase();
            opciones = cargarOpciones(opcionElegida2, filtro);  
            mostrarOpciones (opciones);
            instancia++;
        } else {
            mostrarFiltro(filtro);
            instancia+=2;
        }

    } else if (instancia == 2) {
        opcionElegida = this.previousElementSibling.innerHTML;            //Acá la opción elegida puede ser por Ej: "kingston" 
        mostrarMensaje(opcionElegida);
        filtro = filtro.filter((el) => el[opcionElegida2] == opcionElegida);    //opcionElegida2 es un texto, por eso, esta entre corchetes
        mostrarFiltro(filtro);
        instancia++;
    } else if (instancia == 3) {
        opcionElegida = this.previousElementSibling.innerHTML;
        productoElegido = filtro.find((el) => el.describir() == opcionElegida);
        mostrarProductoElegido (productoElegido);
    }

}

function mostrarProductoElegido (prod) {
    document.getElementById("mensaje").innerHTML = "";      //Borramos mensaje cabecera
    document.getElementById("opciones").innerHTML = "";     //Borramos opciones
    document.getElementById("productoImagen").innerHTML = `<img class="imagenes" src="${prod.imgScr}" alt="">`  //Mostramos foto
    document.getElementById("hasElegido").innerHTML = "Has Elegido:";
    document.getElementById("productoDesc").innerHTML = prod.describir();
    document.getElementById("prodCantCont").innerHTML = `Ingresa La cantidad: <input type="number" value=1 id="prodCant"> <button class="botones" id="btnCarrito">Agregar al Carrito</button>`
    
    document.getElementById("btnCarrito").onclick = () => {     
        cant = document.getElementById("prodCant").value;
        if (cant > 10) {
            document.getElementById("cantEx").innerHTML = `<h3>No tenemos esa cantidad (máximo 10)</h3>`
            return;
        }           
        document.getElementById("cantEx").innerHTML = ""; 
        prod.cantidad = document.getElementById("prodCant").value;
        carrito.push(prod);                                  //Agregamos producto al carrito
        mostrarCarrito();       
    }   
}

function mostrarCarrito () {
    document.getElementById("carrito").innerHTML = "";
    for (let prod of carrito) {
        document.getElementById("carrito").innerHTML += `<div class="cartasCarrito flex">
                                                            <h2 class="cantCarrito" id="cantCarrito">${prod.cantidad}X</h2>   
                                                            <img class="imagenesCarrito" src="${prod.imgScr}" alt="">
                                                            <p>${prod.describir()}<p> 
                                                         </div>                                                       `
    }                               
    
    document.getElementById("prodCantCont").innerHTML = `<button class="botones" id="otroProdBtn">Agregar otro Producto</button> <button class="botones" id="contBtn">Continuar al pago</button>`
    document.getElementById("otroProdBtn").addEventListener("click", inicio);
    document.getElementById("contBtn").addEventListener("click", pago);
}

function pago () {
    document.getElementById("general").innerHTML = `<div class="flex prodDesc"><p id="hasElegido">Tu carrito tiene los siguientes productos:</p></div>`

    for (let prod of carrito) {
        document.getElementById("general").innerHTML += `<div class="flex"><h2>${prod.cantidad}X ${prod.describir()}</h2><div>`
        total += prod.precio * prod.cantidad;
    }
    document.getElementById("general").innerHTML += `<div class="flex flexColumn" id="metodoPago">
                                                        <div class="flex total"><h2>TOTAL: $${total}</h2></div>
                                                        <div class="flex"><p>Tienes las siguientes formas de pago:</p></div>   
                                                        <div class="flex"><h3>Efectivo - Transferecia Bancaria - Mercadopago: 10% OFF</h3><button class="botones" id="10OffBtn">Seleccionar</button></div>
                                                        <div class="flex"><h3>Tarjeta de Crédito</h3><button class="botones" id="tarjetaBtn">Seleccionar</button></div>    
                                                    </div>    
                                                    `
    document.getElementById("10OffBtn").addEventListener("click", pago10Off);
    document.getElementById("tarjetaBtn").addEventListener("click", pagoTarjeta);
}

function pago10Off () {
    document.getElementById("metodoPago").innerHTML = `<div class="flex total"><h2>TOTAL: $${total}</h2></div>
                                                       <h1> El Total a pagar es de $${total*0.9} (10% OFF)</h1><br><br>
                                                       <h2 class="gracias"> Gracias por tu compra! </h2> 
    
                                                        `
}

function pagoTarjeta () {
    document.getElementById("metodoPago").innerHTML = `<div class="flex total"><h2>TOTAL: $${total}</h2></div>
                                                       <div class="flex"><p>Tienes las siguientes formas de pago:</p></div>  
                                                       <div class="flex"><h3>1 Cuota de $${total} </h3><button class="botones" id="1Cuota">Seleccionar</button></div>
                                                       <div class="flex"><h3>3 Cuotas de $${(total*1.09/3).toFixed(2)} por un total de $${(total*1.09).toFixed(2)} </h3><button class="botones" id="3Cuotas">Seleccionar</button></div> 
                                                       <div class="flex"><h3>6 Cuotas de $${(total*1.18/6).toFixed(2)} por un total de $${(total*1.18).toFixed(2)} </h3><button class="botones" id="6Cuotas">Seleccionar</button></div>  
                                                       <div class="flex"><h3>12 Cuotas de $${(total*1.36/12).toFixed(2)} por un total de $${(total*1.36).toFixed(2)} </h3><button class="botones" id="12Cuotas">Seleccionar</button></div> 
                                                        `
    let finPago = document.getElementsByClassName("botones") 

    for (let elem of finPago ) {
        elem.addEventListener("click", finalizar)
    }

    function finalizar () {
        document.getElementById("metodoPago").innerHTML = `<div class="flex total"><h2>TOTAL: $${total}</h2></div>
                                                           <div class="flex"><p>Has elegido la siguiente forma de pago:</p></div>
                                                           <div> <h1>${this.previousElementSibling.innerHTML}<h1></div> 
                                                           <h2 class="gracias"> Gracias por tu compra! </h2>
                                                          `  
    }

}

function mostrarFiltro (fil) {
        document.getElementById("opciones").innerHTML = "";
    for (let elem of fil) {
        document.getElementById("opciones").innerHTML += `<div> <p class="opciones">${elem.describir()}</p> <button class="botones btnOp">Seleccionar</button> </div>`;   
    }

    botonesOpciones = document.getElementsByClassName("btnOp");             //vuelvo a agregar os listener ya que los botones cambian
    for (let bot of botonesOpciones) {
        bot.addEventListener("click", leerOpciones)
    }  
}

function mostrarOpciones (opt) {
        document.getElementById("opciones").innerHTML = "";
    for (let op of opt)  {
        document.getElementById("opciones").innerHTML += `<div> <p class="opciones">${op}</p> <button class="botones btnOp">Seleccionar</button> </div>`;
    }

    botonesOpciones = document.getElementsByClassName("btnOp");             //vuelvo a agregar os listener ya que los botones cambian
    for (let bot of botonesOpciones) {
        bot.addEventListener("click", leerOpciones)
    }

}

function mostrarMensaje (msg) {
    document.getElementById("mensaje").innerHTML = msg;
}

function cargarOpciones (opcion, lista) {    //Esta función obtiene determinados valores de un array de objetos
    let valores = [];                         //por ejemplo las diferentes marcas que hay en la lista de memorias.
    let i = 0;                                //"opcion" es un string y "lista" es un array de objetos. La funcion devuelve
    valores[i] = lista[0][opcion];            //Un array de strings
    for (let elemento of lista) {
        
        if (!(valores.some((el) => el == elemento[opcion])))   {
            i++;
            valores[i] = elemento[opcion];
        }
    }
    return valores;
}
