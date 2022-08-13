class memoriaRam {
    constructor ( categoria, marca, modelo, tipo, capacidad, frecuencia, precio, imgScr, cantidad ) {
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;
        
        this.opcionesBusqueda = "Marca,Modelo,Tipo,Capacidad,Frecuencia".split(",");

        this.describir = () => {
            return (`${this.marca} ${this.modelo} ${this.tipo} ${this.capacidad} ${this.frecuencia}`);
        } 

    }
 
}

class motherboard {
    constructor ( categoria, marca, modelo, socket, memoria, precio, imgScr, cantidad) {
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.memoria = memoria;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;
    
        this.opcionesBusqueda = "Marca,Socket,Memoria".split(","); 

        this.describir = () => {
            return (`${this.marca} ${this.modelo} ${this.socket} ${this.memoria}`);
        } 

    }
 
}

class micro {
    constructor ( categoria, marca, modelo, socket, frecuencia, precio, imgScr, cantidad) {
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;

        this.opcionesBusqueda = "Marca,Socket,Frecuencia".split(","); 
    
        this.describir = () => {
            return (`${this.marca} ${this.modelo} ${this.socket} ${this.frecuencia}`);
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



let botones;
let filtro;
let opcionesDeBusqueda;

const todosLosProductos = listaMicros.concat(listaMothers,listaMemorias);



mostrarProductos (todosLosProductos);
let categorias = cargarOpciones (todosLosProductos, "categoria")
cargarCategoriasEnMenu ();

botonesCategorias = document.getElementsByClassName("botonesCategorias");
for (let boton of botonesCategorias) {
    boton.addEventListener("click", filtrarCategoria);
}

  

function filtrarCategoria () {
    let categoria = this.innerHTML;
    if (categoria != "Todos") {
        filtro = todosLosProductos.filter((prod) => prod.categoria == categoria);
        document.getElementById("main").style = "grid-template-columns: 200px calc(100% - 200px);"      //Dejo lugar para el filtro
        document.getElementById("contFiltro").style = "display: flex";
        mostrarFiltro ();
    } else {
        filtro = todosLosProductos;
        document.getElementById("main").style = "grid-template-columns: 0 100%;"      //Columna de filtro en cero
        document.getElementById("contFiltro").style = "display: none";
    }   
    mostrarProductos (filtro);
}

function mostrarFiltro () {
    let subOpciones;

    opcionesDeBusqueda = filtro[0].opcionesBusqueda;
    document.getElementById("contFiltro").innerHTML = "";
    for (let opcion of opcionesDeBusqueda) {
        document.getElementById("contFiltro").innerHTML +=  `<b><h4>${opcion}</h5></b>`  //Acá opcion puede ser "Marca"

        opcion = opcion.toLowerCase();              

        subOpciones = cargarOpciones (filtro, opcion)   //Buscamos las diferentes opciones de Marcas por ejemplo.
            
        for (let opc of subOpciones) {              //Si la cantidad de subopciones es 1 sacamos el checkbox
            if (subOpciones.length > 1) {           
                document.getElementById("contFiltro").innerHTML += `<div><p class="subOpciones">${opc}</p><input name="${opcion}" type="checkbox" class="checkSubOpciones"></div>`
            } else {
                document.getElementById("contFiltro").innerHTML += `<div><p class="subOpciones">${opc}</p></div>`
            }    
        }
          
    }
       
    let checkSubOpciones = document.getElementsByClassName("checkSubOpciones");
    for (let check of checkSubOpciones) {
        check.addEventListener("click", listarSubOpciones );
    }
}

function listarSubOpciones () {
    if (this.checked) {
        let opcion = this.name.toLowerCase();
        let subOpcion = this.previousElementSibling.innerHTML;
        filtro = filtro.filter((el) => el[opcion] == subOpcion);
        mostrarProductos (filtro);
        mostrarFiltro ();
    }
   
}

function mostrarProductos (productos) {
    document.getElementById("contProductos").innerHTML = "";
    for (let producto of productos) {
        document.getElementById("contProductos").innerHTML += 
        `<div class="cart flex">
            <img src=${producto.imgScr} alt="">
            <h2>$${producto.precio}</h2>
            <h6>${producto.describir()}</h6>
            <button>Agregar al Carrito</button>
        </div>`
    }
}

function cargarCategoriasEnMenu () {
    for (let categoria of categorias) {
        document.getElementById("menuProductos").innerHTML += 
            `<li><a class="dropdown-item botonesCategorias" href="#">${categoria}</a></li>
             <hr class="dropdown-divider">`
    }
    document.getElementById("menuProductos").innerHTML += 
    `<li><a class="dropdown-item botonesCategorias" href="#">Todos</a></li>`
}

function cargarOpciones (arrayDeProductos, propiedad) {
    let valores = [];

    for (let producto of arrayDeProductos) {   
        if(!valores.some((el) => el == producto[propiedad])) {
            valores.push(producto[propiedad]);
        }
    }    
    return valores;
}