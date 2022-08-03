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

listaMothers[0] = new motherboard ("Motherboards", "Gigabyte", "GA-B450M DS3H", "AM4", "DDR4", 18000);
listaMothers[1] = new motherboard ("Motherboards", "Gigabyte", "GA-A520M S2H", "AM4", "DDR4", 19900);
listaMothers[2] = new motherboard ("Motherboards", "Gigabyte", "GA-B550M DS3H", "AM4", "DDR4", 32000);
listaMothers[3] = new motherboard ("Motherboards", "Gigabyte", "GA-X570S UD", "AM4", "DDR4", 64800);
listaMothers[4] = new motherboard ("Motherboards", "Gigabyte", "GA-X570S AORUS ELITE", "AM4", "DDR4", 95000);
listaMothers[5] = new motherboard ("Motherboards", "Msi", "PRO H610M", "LGA1700", "DDR4", 18200);
listaMothers[6] = new motherboard ("Motherboards", "Msi", "PRO H610M-G", "LGA1700", "DDR4", 20000);
listaMothers[7] = new motherboard ("Motherboards", "Msi", "PRO B660M-G", "LGA1700", "DDR4", 25800);
listaMothers[8] = new motherboard ("Motherboards", "Msi", "PRO Z690-A", "LGA1700", "DDR4", 47900);
listaMothers[9] = new motherboard ("Motherboards", "Msi", "Z690 Tomahawk WiFi", "LGA1700", "DDR4", 64900);



const listaMemorias = [];

listaMemorias[0] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "4gb", "2666mhz", 4940);
listaMemorias[1] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "4gb", "3200mhz", 7900);
listaMemorias[2] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "8gb", "2666mhz", 7450);
listaMemorias[3] = new memoriaRam ("Memorias RAM", "kingston", "fury Rgb", "ddr4", "8gb", "2666mhz", 9999);
listaMemorias[4] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "8gb", "3200mhz", 9250);
listaMemorias[5] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "16gb", "2666mhz", 13600);
listaMemorias[6] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "16gb", "3200mhz", 16700);
listaMemorias[7] = new memoriaRam ("Memorias RAM", "kingston", "fury", "ddr4", "16gb", "3600mhz", 19000);
listaMemorias[8] = new memoriaRam ("Memorias RAM", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "2666mhz", 20500);
listaMemorias[9] = new memoriaRam ("Memorias RAM", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "3600mhz", 24000);


let opciones;
let botonesOpciones;
let opcionElegida;
let opcionElegida2;
let instancia = 0;
let productoElegido;
let carrito = [];

filtro = [];
filtro = filtro.concat (listaMicros, listaMothers, listaMemorias);



document.getElementById("general").innerHTML = `  <div class="flex"><h2 id="mensaje"></h2></div>
                                                    <div class="opcionesCont flex" id="opciones"></div> 
                                                    <div class="flex" id="productoImagen"></div>
                                                    <div class="flex prodDesc"><p id="hasElegido"></p><h1 id="productoDesc"></h1></div>
                                                    <div class="flex" id="prodCantCont"></div>`



mostrarMensaje ("Bienvenido a e-Hard Computación. A continuación podrás buscar y elegir hardware para tu PC. Elige alguna opción de busqueda:")
opciones = cargarOpciones("descripcion", filtro);           //Cargamos opciones de busqueda por la propiedad "descripción"
mostrarOpciones (opciones);

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
        mostrarMensaje(opcionElegida2);
        opcionElegida2 = opcionElegida2.toLowerCase();
        opciones = cargarOpciones(opcionElegida2, filtro);  
        mostrarOpciones (opciones);
        instancia++;
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
        prod.cantidad = document.getElementById("prodCant").value;
        carrito.push(prod);                                  //Agregamos producto al carrito
        mostrarCarrito();       
    }   
}






function mostrarCarrito () {
    document.getElementById("carrito").innerHTML += "";
    for (let prod of carrito) {
        document.getElementById("carrito").innerHTML += `<div class="cartasCarrito flex">
                                                            <h2 class="cantCarrito" id="cantCarrito">${prod.cantidad}X</h2>   
                                                            <img class="imagenesCarrito" src="${prod.imgScr}" alt="">
                                                            <p>${prod.describir()}<p> 
                                                         </div>                                                       `
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





/*

alert("Bienvenido a e-Hard computación, a continuación podrás buscar y elegir hardware para tu PC, presiona 'ENTER' para continuar");

let filtro;
let op;
let opc;
let opc2;
let opcAnterior;
let opciones;
let listaDeOpciones;
let carrito = [];
let total;
let salir;

do {
    filtro = [];
    filtro = filtro.concat (listaMicros, listaMothers, listaMemorias);

    opciones = arrayDeOpciones("descripcion", filtro);
    listaDeOpciones = verArrayComoLista (opciones);
    mostrarMensaje(`Ingrese una opción de búsqueda. Puedes filtrar por:\n${listaDeOpciones}`)
    opc = opciones[parseInt(op)-1];                 // opc puede ser por ej. "Memorias RAM"
    filtro = filtro.filter((el) => el.descripcion == opc);   //Acá pueden quedar por ejemplo las "memorias RAM"

    opciones = filtro[0].opcionesBusqueda;  //Cargamos las opciones de busqueda del primer elemento de la lista
    listaDeOpciones = verArrayComoLista (opciones);
    mostrarMensaje(`Ingrese una opción de búsqueda. Puedes filtrar por:\n${listaDeOpciones}`)
    opc = opciones[parseInt(op)-1];         //opc puede ser por ej. "frecuencia"
    opc = opc.toLowerCase();

    if (opc != "mostrar todo") { 
        opciones = arrayDeOpciones (opc,filtro);
        listaDeOpciones = verArrayComoLista (opciones);
        mostrarMensaje(`Ingrese una opción de búsqueda. Puedes filtrar por:\n${listaDeOpciones}`)
        opc2 = opciones[parseInt(op)-1];                                 //opc2 puede ser por ej: "2666mhz"
        filtro = filtro.filter((el) => el[opc] == opc2);  
    } 

        opciones = filtro;
    listaDeOpciones = mostrarDescripciones(filtro);
    mostrarMensaje(`Ingrese una opción:\n${listaDeOpciones}`)
    opc = filtro[parseInt(op)-1];  
    
    do {
        op = prompt ("Ingrese la cantidad de unidades:");
        if (parseFloat(op)%1 == 0 && parseFloat(op) >=1 && parseFloat(op) <= 5) {
            break;
        }
        else {
            alert("No tenemos esa cantidad (Quedan 5 unidades en stock). Vuelve a intentar");
            salir = false;
        }
    } while (salir == false)    

    opc.cantidad = op;

    carrito.push(opc);
    total = 0;
    for (let el of carrito) {
        total += el.precio * el.cantidad;
    }

    do {
        op = prompt(`Has elegido:\n\n${mostrarDescripCC(carrito)}TOTAL: $${total}\n\n Quieres agregar otro producto? Presiona 'Aceptar' para agregar otro producto o cancelar para ir al pago`);
        if (op == "" || op == null) {
            break;
        }
        else {
            alert("Opción incorrecta. Vuelve a intentar");
            salir = false;
        }
    
    } while (salir == false)    

} while (op == "")

do {

    op = prompt ("Elige la forma de Pago:\n\n1: Efectivo - Transferencia - Mercadopago (10% OFF)\n2: Tarjeta de credito");
    if ( op != "1" && op != "2")    {
        alert("Opción incorrecta. Vuelve a intentar");
        salir = false;
    } else {
        break;
    }

} while (salir == false);

switch (op) {
    case "1":
        alert (`El total a pagar es $${(total*0.9).toFixed(2)}\n\nGracias por su compra!`)
        break;
    case "2":
        op = prompt (`Ingresa la cantidad de cuotas:\n\n1 Cuota de $${total.toFixed(2)}\n3 Cuotas de $${(total*1.09/3).toFixed(2)} por un total de $${(total*1.09).toFixed(2)}\n6 Cuotas de $${(total*1.18/6).toFixed(2)} por un total de $${(total*1.18).toFixed(2)}\n12 Cuotas de $${(total*1.36/12).toFixed(2)} por un total de $${(total*1.36).toFixed(2)}`);  
        op = parseInt(op);
        alert (`La forma de pago es:\n\n${op} cuota/s de $${(total*interes(op)/op).toFixed(2)}\nPor un total de $${(total*interes(op)).toFixed(2)}\n\nGracias por su compra!`)
        break;
    default: alert("Opción incorrecta. Vuelve a intentar");     
}





function interes (cc) { 
    if (cc == 1) {
        return 1;
    } 
    else { 
        return (1 + (0.03 * cc));
    }
}

function mostrarMensaje (msj) { 
    do {
        op = prompt(msj);
        if (parseFloat(op)%1 == 0 && parseFloat(op) >= 1 && parseFloat(op) <= opciones.length) {
            return;
        } 
        else {
            alert("Opción incorrecta. Vuelve a intentar");
            salir = false;
        }    
    } while (salir == false)
        
}  

function arrayDeOpciones (opcion, lista) {     //Esta función obtiene determinados valores de un array de objetos
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

function verArrayComoLista (array) {       //Esta función genera un string para mostrar en pantalla el cual es una lista con número
    let lista = "";                        //de opciones. Para un determinado array
    let i = 1;
    for (let el of array) {
        lista += `${i}: ${el}\n`;
        i++;
    }
    return lista;
}

function mostrarDescripciones (lista) {           //Esta función crea un string con números de opcion para las descripciones 
    let desc = "";                                //que genera el método "describir()"
    let i = 1;
    for (let list of lista) {
        desc += `${i++}: ${list.describir()}\n`;
    }
    return desc;
}

function mostrarDescripCC (lista) {               //Esta función crea un string con la cantidad de productos elegidos y su valor 
    let desc = "";                                //"lista" es un array de objetos
    for (let list of lista) {
        desc += `${list.cantidad}x ${list.describir()}\n`;
    }
    return desc;
}


*/