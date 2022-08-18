class memoriaRam {
    constructor (id, categoria, marca, modelo, rgb, tipo, capacidad, frecuencia, precio, imgScr, cantidad ) {
        this.id = id;
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.rgb = rgb;
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;
        
        this.opcionesBusqueda = "Marca,Modelo,Rgb,Tipo,Capacidad,Frecuencia".split(",");

        this.describir = `Memoria Ram ${this.marca} ${this.modelo} ${this.rgb} ${this.tipo} ${this.capacidad} ${this.frecuencia}`;
    }
 
}

class motherboard {
    constructor (id, categoria, marca, modelo, socket, memoria, precio, imgScr, cantidad) {
        this.id = id;
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.memoria = memoria;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;
    
        this.opcionesBusqueda = "Marca,Socket,Memoria".split(","); 

        this.describir = `Motherboard ${this.marca} ${this.modelo} ${this.socket} ${this.memoria}`;
    }
 
}

class micro {
    constructor (id, categoria, marca, modelo, socket, frecuencia, precio, imgScr, cantidad) {
        this.id = id;
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;

        this.opcionesBusqueda = "Marca,Socket,Frecuencia".split(","); 
    
        this.describir = `Microprocesador ${this.marca} ${this.modelo} ${this.socket} ${this.frecuencia}`;
    }

}

class placaVideo {
    constructor (id, categoria, marca, serie, modelo, memoria, ddr, precio, imgScr, cantidad) {
        this.id = id;
        this.categoria = categoria;
        this.marca = marca;
        this.serie = serie;
        this.modelo = modelo;
        this.memoria = memoria;
        this.ddr = ddr;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;

        this.opcionesBusqueda = "Marca,Serie,Memoria,DDR".split(","); 
    
        this.describir = `Placa de video ${this.marca} ${this.serie} ${this.modelo} ${this.memoria} ${this.ddr}`;
    }

}

class fuente {
    constructor (id, categoria, marca, certificacion, potencia, precio, imgScr, cantidad) {
        this.id = id;
        this.categoria = categoria;
        this.marca = marca;
        this.certificacion = certificacion;
        this.potencia = potencia;
        this.precio = precio;
        this.imgScr = imgScr;
        this.cantidad = cantidad;

        this.opcionesBusqueda = "Marca,Certificacion,Potencia".split(","); 
    
        this.describir = `Fuente ${this.marca} ${this.certificacion} ${this.potencia}`;
    }

}

                                                    //Cargamos los productos
const listaFuentes = [];

listaFuentes[0] = new fuente ("fp1", "Fuentes", "Thermaltake", "Sin certificacion", "500w", 8900, "./images/fp0.jpeg");
listaFuentes[1] = new fuente ("fp2", "Fuentes", "Thermaltake", "Sin certificacion", "600w", 9999, "./images/fp1.jpeg");
listaFuentes[2] = new fuente ("fp3", "Fuentes", "Gigabyte", "80 Plus Bronze", "450w", 9150, "./images/fp2.jpeg");
listaFuentes[3] = new fuente ("fp4", "Fuentes", "Gigabyte", "80 Plus Bronze", "550w", 11700, "./images/fp3.jpeg");
listaFuentes[4] = new fuente ("fp5", "Fuentes", "Gigabyte", "80 Plus Bronze", "650w", 14700, "./images/fp4.jpeg");
listaFuentes[5] = new fuente ("fp6", "Fuentes", "Gigabyte", "80 Plus Gold", "750w", 21600, "./images/fp5.jpeg");
listaFuentes[6] = new fuente ("fp7", "Fuentes", "Gigabyte", "80 Plus Gold", "850w", 22999, "./images/fp6.jpeg");
listaFuentes[7] = new fuente ("fp8", "Fuentes", "Gigabyte", "80 Plus Gold", "1000w", 30999, "./images/fp7.jpeg");
listaFuentes[8] = new fuente ("fp9", "Fuentes", "Essenses", "Sin certificacion", "750w", 4500, "./images/fp8.jpeg");
listaFuentes[9] = new fuente ("fp10", "Fuentes", "Essenses", "Sin certificacion", "850w", 4700, "./images/fp9.jpeg");



const listaPlacas = [];

listaPlacas[0] = new placaVideo ("pv1", "Placas de Video", "Gigabyte", "GeForce RTX", "3060 Gaming Oc", "12gb", "DDR6", 117400, "./images/pv1.jpeg");
listaPlacas[1] = new placaVideo ("pv2", "Placas de Video", "Gigabyte", "GeForce RTX", "3060 Vision Oc", "12gb", "DDR6", 118700, "./images/pv2.jpeg");
listaPlacas[2] = new placaVideo ("pv3", "Placas de Video", "Gigabyte", "GeForce RTX", "3060 Gaming Oc", "8gb", "DDR6", 134000, "./images/pv3.jpeg");
listaPlacas[3] = new placaVideo ("pv4", "Placas de Video", "Msi", "GeForce RTX", "3070 Ventus 3x Plus", "8gb", "DDR6", 165000, "./images/pv4.jpeg");
listaPlacas[4] = new placaVideo ("pv5", "Placas de Video", "Msi", "GeForce RTX", "3080 Gaming Z Trio", "12gb", "DDR6", 270000, "./images/pv5.jpeg");
listaPlacas[5] = new placaVideo ("pv6", "Placas de Video", "Asus", "GeForce RTX", "3080 Tuf Gaming", "12gb", "DDR6", 280000, "./images/pv6.jpeg");
listaPlacas[6] = new placaVideo ("pv7", "Placas de Video", "Gainward", "GeForce RTX", "3090 Phantom +", "24gb", "DDR6", 330000, "./images/pv7.jpeg");
listaPlacas[7] = new placaVideo ("pv8", "Placas de Video", "Evga", "GeForce RTX", "3090 FTW3 Ultra", "24gb", "DDR6", 370000, "./images/pv8.jpeg");
listaPlacas[8] = new placaVideo ("pv8", "Placas de Video", "Asus", "GeForce RTX", "3090 Rog Strix Gaming Oc Blanco", "24gb", "DDR6", 499900, "./images/pv9.jpeg");
listaPlacas[9] = new placaVideo ("pv9", "Placas de Video", "Msi", "Radeon RX", "6750 XT Mech 2X Oc", "12gb", "DDR6", 148300, "./images/pv10.jpeg");
listaPlacas[10] = new placaVideo ("pv10", "Placas de Video", "Asus", "Radeon RX", "6700 XT Dual Oc", "12gb", "DDR6", 160000, "./images/pv11.jpeg");
listaPlacas[11] = new placaVideo ("pv11", "Placas de Video", "Asus", "Radeon RX", "6800 XT Rog Strix Gaming Oc", "16gb", "DDR6", 260000, "./images/pv12.jpeg");
listaPlacas[12] = new placaVideo ("pv12", "Placas de Video", "Gigabyte", "Radeon RX", "6900 XT Gaming Oc", "16gb", "DDR6", 250700, "./images/pv13.jpeg");
listaPlacas[13] = new placaVideo ("pv13", "Placas de Video", "Gigabyte", "GeForce GTX", "1650 D6 Oc", "4gb", "DDR6", 55000, "./images/pv14.jpeg");
listaPlacas[14] = new placaVideo ("pv14", "Placas de Video", "Msi", "GeForce GTX", "1660 Super Ventus Xs Oc", "6gb", "DDR6", 85000, "./images/pv15.jpeg");
listaPlacas[15] = new placaVideo ("pv15", "Placas de Video", "Gigabyte", "GeForce GTX", "1660 Ti Oc", "6gb", "DDR6", 84000, "./images/pv16.jpeg");



const listaMicros = [];

listaMicros[0] = new micro ("mp0", "Microprocesadores", "Amd", "Ryzen 3 4100", "AM4", "4.0Ghz", 20900, "./images/amd0.jpeg");
listaMicros[1] = new micro ("mp1", "Microprocesadores", "Amd", "Ryzen 3 4350G", "AM4", "4.0Ghz", 32900, "./images/amd1.jpeg");
listaMicros[2] = new micro ("mp2", "Microprocesadores", "Amd", "Ryzen 5 3600", "AM4", "4.2Ghz", 42400, "./images/amd2.jpeg");
listaMicros[3] = new micro ("mp3", "Microprocesadores", "Amd", "Ryzen 5 5500", "AM4", "4.2Ghz", 46800, "./images/amd3.jpeg");
listaMicros[4] = new micro ("mp4", "Microprocesadores", "Amd", "Ryzen 7 5700X", "AM4", "4.6Ghz", 66000, "./images/amd4.jpeg");
listaMicros[5] = new micro ("mp5", "Microprocesadores", "Amd", "Ryzen 9 5900X", "AM4", "4.8Ghz", 110000, "./images/amd5.jpeg");
listaMicros[6] = new micro ("mp6", "Microprocesadores", "Intel", "Celeron G6900", "LGA1700", "3.8Ghz", 12000, "./images/intel0.jpeg");
listaMicros[7] = new micro ("mp7", "Microprocesadores", "Intel", "Pentium G7400", "LGA1700", "3.8Ghz", 15600, "./images/intel1.jpeg");
listaMicros[8] = new micro ("mp8", "Microprocesadores", "Intel", "Core i3 12100", "LGA1700", "4.3Ghz", 34500, "./images/intel2.jpeg");
listaMicros[9] = new micro ("mp9", "Microprocesadores", "Intel", "Core i5 12400", "LGA1700", "4.4Ghz", 51000, "./images/intel3.jpeg");
listaMicros[10] = new micro ("mp10", "Microprocesadores", "Intel", "Core i7 12700KF", "LGA1700", "5.0Ghz", 87900, "./images/intel4.jpg");
listaMicros[11] = new micro ("mp11", "Microprocesadores", "Intel", "Core i9 12900KF", "LGA1700", "5.2Ghz", 147719, "./images/intel5.jpeg");
listaMicros[12] = new micro ("mp12", "Microprocesadores", "Intel", "Core i9 12900K", "LGA1700", "5.2Ghz", 149900, "./images/intel5.jpeg");
listaMicros[13] = new micro ("mp13", "Microprocesadores", "Intel", "Core i7 12700K", "LGA1700", "5.0Ghz", 99500, "./images/intel6.jpeg");
listaMicros[14] = new micro ("mp14", "Microprocesadores", "Intel", "Core i5 11600K Comet Lake", "LGA1200", "4.9Ghz", 56300, "./images/intel7.jpeg");
listaMicros[15] = new micro ("mp15", "Microprocesadores", "Intel", "Core i7 11700KF Rocket Lake", "LGA1200", "5.0Ghz", 75200, "./images/intel8.jpeg");
listaMicros[16] = new micro ("mp16", "Microprocesadores", "Intel", "Celeron G5905", "LGA1200", "3.5Ghz", 8700, "./images/intel9.jpeg");
listaMicros[17] = new micro ("mp17", "Microprocesadores", "Intel", "Pentium Gold G6405", "LGA1200", "4.1Ghz", 12400, "./images/intel10.jpeg");
listaMicros[18] = new micro ("mp18", "Microprocesadores", "Intel", "Core i3 10105", "LGA1200", "4.4Ghz", 26900, "./images/intel11.jpeg");



const listaMothers = [];

listaMothers[0] = new motherboard ("mb0", "Motherboards", "Gigabyte", "GA-B450M DS3H", "AM4", "DDR4", 18000, "./images/mb0.jpeg");
listaMothers[1] = new motherboard ("mb1", "Motherboards", "Gigabyte", "GA-A520M S2H", "AM4", "DDR4", 19900, "./images/mb1.jpeg");
listaMothers[2] = new motherboard ("mb2", "Motherboards", "Gigabyte", "GA-B550M DS3H", "AM4", "DDR4", 32000, "./images/mb2.jpeg");
listaMothers[3] = new motherboard ("mb3", "Motherboards", "Gigabyte", "GA-X570S UD", "AM4", "DDR4", 64800, "./images/mb3.jpeg");
listaMothers[4] = new motherboard ("mb4", "Motherboards", "Gigabyte", "GA-X570S AORUS ELITE", "AM4", "DDR4", 95000, "./images/mb4.jpeg");
listaMothers[5] = new motherboard ("mb5", "Motherboards", "Msi", "PRO H610M", "LGA1700", "DDR4", 18200, "./images/mb5.jpg");
listaMothers[6] = new motherboard ("mb6", "Motherboards", "Msi", "PRO H610M-G", "LGA1700", "DDR4", 20000, "./images/mb6.jpeg");
listaMothers[7] = new motherboard ("mb7", "Motherboards", "Msi", "PRO B660M-G", "LGA1700", "DDR4", 25800, "./images/mb7.jpg");
listaMothers[8] = new motherboard ("mb8", "Motherboards", "Msi", "PRO Z690-A", "LGA1700", "DDR4", 47900, "./images/mb8.jpeg");
listaMothers[9] = new motherboard ("mb9", "Motherboards", "Msi", "Z690 Tomahawk WiFi", "LGA1700", "DDR4", 64900, "./images/mb9.jpeg");
listaMothers[10] = new motherboard ("mb10", "Motherboards", "Gigabyte", "GA-Z690 AORUS ULTRA", "LGA1700", "DDR5", 103000, "./images/mb10.jpeg");
listaMothers[11] = new motherboard ("mb11", "Motherboards", "Asus", "Prime Z690-P WIFI", "LGA1700", "DDR4", 63400, "./images/mb11.jpeg");
listaMothers[12] = new motherboard ("mb12", "Motherboards", "Asus", "Tuf GAMING Z690-PLUS WIFI", "LGA1700", "DDR4", 85000, "./images/mb12.jpeg");
listaMothers[13] = new motherboard ("mb13", "Motherboards", "Asus", "Prime A320M-K", "AM4", "DDR4", 11900, "./images/mb13.jpeg");
listaMothers[14] = new motherboard ("mb14", "Motherboards", "Asus", "Prime A520M-K", "AM4", "DDR4", 18000, "./images/mb14.jpeg");
listaMothers[15] = new motherboard ("mb15", "Motherboards", "Asus", "Prime B450M-A II", "AM4", "DDR4", 17600, "./images/mb15.jpeg");
listaMothers[16] = new motherboard ("mb16", "Motherboards", "Asus", "Tuf B550M GAMING PLUS WIFI II", "AM4", "DDR4", 42800, "./images/mb16.jpeg");
listaMothers[17] = new motherboard ("mb17", "Motherboards", "Asus", "Rog B550-A GAMING", "AM4", "DDR4", 61000, "./images/mb17.jpeg");
listaMothers[18] = new motherboard ("mb18", "Motherboards", "Asus", "Prime X570-P", "AM4", "DDR4", 38000, "./images/mb18.jpeg");
listaMothers[19] = new motherboard ("mb19", "Motherboards", "Msi", "B560M PRO VDH", "LGA1200", "DDR4", 24100, "./images/mb19.jpeg");
listaMothers[20] = new motherboard ("mb20", "Motherboards", "Msi", "B560M BAZOOKA", "LGA1200", "DDR4", 29700, "./images/mb20.jpeg");
listaMothers[21] = new motherboard ("mb21", "Motherboards", "Msi", "Z590 GAMING PLUS", "LGA1200", "DDR4", 48030, "./images/mb21.jpeg");
listaMothers[22] = new motherboard ("mb22", "Motherboards", "Msi", "Z590 GAMING CARBON WIFI", "LGA1200", "DDR4", 66000, "./images/mb22.jpeg");



const listaMemorias = [];

listaMemorias[0] = new memoriaRam ("mr1", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "4gb", "2666mhz", 4940, "./images/mr0.jpeg");
listaMemorias[1] = new memoriaRam ("mr2", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "4gb", "3200mhz", 7900, "./images/mr0.jpeg");
listaMemorias[2] = new memoriaRam ("mr3", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "8gb", "2666mhz", 7450, "./images/mr0.jpeg");
listaMemorias[3] = new memoriaRam ("mr4", "Memorias RAM", "kingston", "fury", "RGB", "ddr4", "8gb", "2666mhz", 9999, "./images/mr1.jpeg");
listaMemorias[4] = new memoriaRam ("mr5", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "8gb", "3200mhz", 9250, "./images/mr0.jpeg");
listaMemorias[5] = new memoriaRam ("mr6", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "16gb", "2666mhz", 13600, "./images/mr0.jpeg");
listaMemorias[6] = new memoriaRam ("mr7", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "16gb", "3200mhz", 16700, "./images/mr0.jpeg");
listaMemorias[7] = new memoriaRam ("mr8", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr4", "16gb", "3600mhz", 19000, "./images/mr0.jpeg");
listaMemorias[8] = new memoriaRam ("mr9", "Memorias RAM", "Corsair", "Vengance Pro Blanco", "RGB", "ddr4", "16gb (2x8Gb)", "2666mhz", 20500, "./images/mr2.jpeg");
listaMemorias[9] = new memoriaRam ("mr10", "Memorias RAM", "Corsair", "Vengance Pro Blanco", "RGB", "ddr4", "16gb (2x8Gb)", "3600mhz", 24000, "./images/mr3.jpeg");
listaMemorias[10] = new memoriaRam ("mr11", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr5", "8gb", "4800mhz", 15900, "./images/mr0.jpeg");
listaMemorias[11] = new memoriaRam ("mr12", "Memorias RAM", "kingston", "fury", "sin RGB", "ddr5", "16gb", "5200mhz", 26000, "./images/mr0.jpeg");
listaMemorias[12] = new memoriaRam ("mr13", "Memorias RAM", "Corsair", "Dominator", "RGB", "ddr5", "32gb (2x16Gb)", "5200mhz", 76700, "./images/mr4.jpeg");
listaMemorias[13] = new memoriaRam ("mr14", "Memorias RAM", "kingston", "fury", "RGB", "ddr5", "8gb", "5200mhz", 9900, "./images/mr5.jpeg");
listaMemorias[14] = new memoriaRam ("mr15", "Memorias RAM", "kingston", "fury", "RGB", "ddr5", "8gb", "5600mhz", 16000, "./images/mr6.jpeg");
listaMemorias[15] = new memoriaRam ("mr16", "Memorias RAM", "Corsair", "Vengeance Pro Negro", "RGB", "ddr4", "8gb", "3200mhz", 10500, "./images/mr7.jpeg");
listaMemorias[16] = new memoriaRam ("mr17", "Memorias RAM", "Corsair", "Vengeance Pro Negro", "RGB", "ddr4", "16gb (2x8Gb)", "2666mhz", 19900, "./images/mr8.jpeg");
listaMemorias[17] = new memoriaRam ("mr18", "Memorias RAM", "Corsair", "Vengance Rs Negro", "RGB", "ddr4", "16gb (2x8Gb)", "3600mhz", 20900, "./images/mr9.jpeg");
listaMemorias[18] = new memoriaRam ("mr19", "Memorias RAM", "Corsair", "Vengeance Pro Negro", "RGB", "ddr4", "16gb (2x8Gb)", "2666mhz", 19900, "./images/mr10.jpeg");


let opcionesElegidas = [];
let botones;
let filtro;
let opcionesDeBusqueda;
let filtroCategoria;
let opcOrdenPrecio = "";
let formaDePago;
 //****//

let carrito = JSON.parse(localStorage.getItem("carrito"));
if (carrito == null) {
    carrito = [];
} else if (carrito.length > 0) {
    actualizarIconoCarrito();
}
 

const todosLosProductos = [...listaMicros, ...listaMothers, ...listaMemorias, ...listaPlacas, ...listaFuentes];

mostrarProductos (todosLosProductos);
let categorias = cargarOpciones (todosLosProductos, "categoria")

cargarCategoriasEnMenu ();
document.getElementById("home").addEventListener("click", () => mostrarProductos (todosLosProductos))

botonesCategorias = document.getElementsByClassName("botonesCategorias");
for (let boton of botonesCategorias) {
    boton.addEventListener("click", filtrarCategoria);
}

document.getElementById("botonBuscar").addEventListener("click", buscarProducto);


function buscarProducto () {
    filtro = [];
    let producto = document.getElementById("buscadorInput").value;
    if (producto != "") {
        filtro = todosLosProductos.filter((el) => (el.describir.toLowerCase()).includes(producto.toLowerCase().trim()));  //Con el método trim() eliminamos los espacios antes y despues de la palabra a buscar
        document.getElementById("contFiltro").style = "display: none";
        document.getElementById("main").style = "grid-template-columns: 0 100%";      //Columna de filtro en cero
        mostrarProductos(filtro);
        if (filtro.length == 0) {
            document.getElementById("contProductos").innerHTML = "<h2>No hay resultados de busqueda</h2>";
        }
    }    
}

function filtrarCategoria () {
    let categoria = this.innerHTML;
    if (categoria != "Home") {
        filtro = todosLosProductos.filter((prod) => prod.categoria == categoria);
        document.getElementById("main").style = "grid-template-columns: max-content auto;"      //Dejo lugar para el filtro
        document.getElementById("contFiltro").style = "display: flex";
        filtroCategoria = filtro;
        mostrarFiltro ();
    } else {
        filtro = todosLosProductos;
        document.getElementById("main").style = "grid-template-columns: 0 100%;"      //Columna de filtro en cero
        document.getElementById("contFiltro").style = "display: none";
    }   
    ordenarPorPrecio();             //Ordena los productos filtrados (filtro) por precio y los lista
}

function mostrarFiltro () {
    let subOpciones;
    opcionesDeBusqueda = filtro[0].opcionesBusqueda;
    document.getElementById("contFiltro").innerHTML = "";
    document.getElementById("contFiltro").innerHTML = "<div><b><h3>Filtros de busqueda:</h3></b></div><br>";
    document.getElementById("contFiltro").innerHTML +=  `
                                                        <div class="filtroPrecio">
                                                            <label for="ordenar"><h3>Ordenar por</h3></label><br>
                                                            <select name="ordenar" id="precioOrdenSelect">
                                                                <option>Precio ascendente</option>
                                                                <option ${opcOrdenPrecio}>Precio descendente</option>
                                                            </select>
                                                        </div>`;
            
    for (let opcion of opcionesDeBusqueda) {
        document.getElementById("contFiltro").innerHTML += `<b><h4 class="filtroOpciones">${opcion}</h4></b>`;  //Acá opcion puede ser "Marca"

        opcion = opcion.toLowerCase();              
        subOpciones = cargarOpciones (filtro, opcion);   //Buscamos las diferentes opciones de Marcas por ejemplo.
                    
        for (let opc of subOpciones) {              //Si la cantidad de subopciones es 1 sacamos el checkbox
            if (subOpciones.length > 1) {           
                document.getElementById("contFiltro").innerHTML += `<div> <p class="subOpciones">${opc}</p> <input name="${opcion}" type="checkbox" class="checkSubOpciones"> </div>`; //Si la cantidad de subopciones es mas que 1 ponemos los checkbox
            } else {
                if (opcionesElegidas.some((el) => el.opcion == opcion)) { 
                    document.getElementById("contFiltro").innerHTML += `<div> <p class="subOpciones">${opc}</p> <img src="./images/close.png" alt="" title="${opcion}" class="borrarFiltro"></img> </div>`;
                }                                                                                                   
                else {
                    document.getElementById("contFiltro").innerHTML += `<div> <p class="subOpciones">${opc}</p> </div>`;
                }        
            }    
        }
    }
       
    let botonesBorrarFiltro = document.getElementsByClassName("borrarFiltro");
    for (let boton of botonesBorrarFiltro) {
        boton.addEventListener("click", borrarFiltro);
    }

    let checkSubOpciones = document.getElementsByClassName("checkSubOpciones");
    for (let check of checkSubOpciones) {
        check.addEventListener("click", listarSubOpciones );
    }

    document.getElementById("precioOrdenSelect").addEventListener("change", ordenarPorPrecio);
}

function ordenarPorPrecio () {

    if (document.getElementById("precioOrdenSelect") != null) {         //Si estamos en home y seleccionamos home valdría null
        let opcion = document.getElementById("precioOrdenSelect").value.toLowerCase();
        
        if (opcion == "precio ascendente") {
            filtro == filtro.sort((a,b) => {
                if (a.precio > b.precio) return 1;
                if (a.precio < b.precio) return -1;
                if (a.precio == b.precio) return 0;
            })
            opcOrdenPrecio = "";           //Para que la opcion de ordenar precio quede seleccionada
        }

        if (opcion == "precio descendente") {
            filtro == filtro.sort((a,b) => {
                if (a.precio < b.precio) return 1;
                if (a.precio > b.precio) return -1;
                if (a.precio == b.precio) return 0;
            })
            opcOrdenPrecio = "selected";
        }
    }    
    mostrarProductos(filtro);
}

function borrarFiltro () {
    filtro = filtroCategoria;

    let opcionE = this.title.toLowerCase();
    opcionesElegidas = opcionesElegidas.filter((el) => el.opcion != opcionE);   //Acá las opciones elegidas puedens ser: "Marca" "Socket" etc
                                                                               //Sacamos del array la opcion eliminada del fitro 
    for (let opc of opcionesElegidas) {
        filtro = filtro.filter((el) => el[opc.opcion] == opc.subOpcion);
    }
        
    ordenarPorPrecio();
    mostrarFiltro();
}

function listarSubOpciones () {
    let opcion = this.name.toLowerCase();        
    let subOpcion = this.previousElementSibling.innerHTML;
    opcionesElegidas.push({opcion: opcion, subOpcion: subOpcion}); 
    filtro = filtro.filter((el) => el[opcion] == subOpcion);
    ordenarPorPrecio();
    mostrarFiltro ();
}

function mostrarProductos (productos) { 
    document.getElementById("contProductos").innerHTML = "";
    for (let producto of productos) {
        document.getElementById("contProductos").innerHTML += 
        `<div class="cart flex">
            <img class="imgProductos" src=${producto.imgScr} alt="">
            <h2>$${producto.precio}</h2>
            <h6>${producto.describir}</h6>
            <button value="${producto.id}" class="botonesCarrito">Agregar al Carrito</button>
        </div>`;
    }

    let botonesCarrito = document.getElementsByClassName("botonesCarrito");

    for (let boton of botonesCarrito) {
        boton.addEventListener("click", agregarAlCarrito);
    }
}

function agregarAlCarrito () {
    let producto = todosLosProductos.find((el) => el.id == this.value); //Buscamos el producto elegido por su id en todos los productos
    let enCarrito = carrito.findIndex((el) => el.id == producto.id); //Verificamos si el producto agregado ya está en el carrito
            
    if (enCarrito == -1) {
        carrito.push(producto);                             //Si no estñá lo pusheamos
        producto.cantidad = 1;                              //Le ponemos cantidad en 1 ya que por defecto la cantidad no viene seteada
    } else {
        carrito[enCarrito].cantidad ++;                     //Si está le aumentamos la cantidad        
    }
    
    let carritoCantidad = carrito.reduce((ac, el) => el.cantidad + ac, 0);              //Calculamos la cantidad total de productos en el carrito

    document.getElementById("carrito").innerHTML = "";          //Mostramos Icono carrito
    document.getElementById("carrito").innerHTML += `<img src="./images/carrito.png" alt="" title="Ir al Carrito" class="carritoImg" id="carritoImg">
                                                     <img src="./images/vaciar.png" alt="Vaciar Carrito" title="Vaciar Carrito" class="vaciarCarritoImg" id="botonVaciar">   
                                                     <div class="carritoCant flex">${carritoCantidad}</div>`;

    document.getElementById("carritoImg").addEventListener("click", mostrarCarrito);        
    document.getElementById("botonVaciar").addEventListener("click", vaciarCarrito);    
    guardarCarritoEnStorage ();                                        
}

function mostrarCarrito () {
        
    document.getElementById("contFiltro").style.display = "none";
    document.getElementById("main").style = "grid-template-columns: 0 100%;";
    document.getElementById("contProductos").innerHTML = "";
    document.getElementById("contProductos").innerHTML += '<div class="contCarrito flex" id="contCarrito"> </div>';
         
    for (let producto of carrito) {
        document.getElementById("contCarrito").innerHTML += `<div class="productosCarrito flex">
                                                                <div style="position:relative" class="flex">
                                                                    <img class="imgProductosCarrito" src=${producto.imgScr} alt="">
                                                                    <div class="carritoCantidades flex">x${producto.cantidad}</div>
                                                                </div>
                                                                <div>
                                                                    <button value="${producto.id}" class="botonesMasMenos botonesMenos">-</button>
                                                                    <button value="${producto.id}" class="botonesMasMenos botonesMas">+</button>
                                                                </div>
                                                                <h6 class="carritoDescripciones">${producto.describir}</h6>
                                                                <h2>$${producto.precio} x ${producto.cantidad} = $${producto.precio * producto.cantidad}</h2>
                                                            </div>`;
    }                            

    let total = carrito.reduce((ac, el) => ac + ((el.precio) * (el.cantidad)), 0 );
    document.getElementById("contCarrito").innerHTML += `<div class="total">
                                                            <h2 id="totalCarrito">TOTAL $${total}</h2> 
                                                            <p >(Tarjeta en 1 pago)</p>
                                                         <div>`;
    
    document.getElementById("contCarrito").innerHTML += `<div class="formasDePago" id="formasDePago">
                                                            <h3 class="tituloPago"> Selecciona una forma de pago</h3><br>
                                                            <h3>Efectivo/Transferencia </h3>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> (TOTAL: <span class="totales">$${(total * 0.9).toFixed(2)}</span>) (10% OFF)</p><input type="checkbox" value="Efectivo/Transferencia:" class="checkPago"></div> <br>

                                                            <h3> Tarjetas de credito </h3>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 1 Pago de <span class="totales">$${total}</span></p> <input type="checkbox" value="Tarjeta de Crédito:" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 3 Cuotas de $${(total*1.09/3).toFixed(2)} (TOTAL: <span class="totales">$${(total*1.09).toFixed(2)}</span>)</p> <input type="checkbox" value="Tarjeta de Crédito:" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 6 Cuotas de $${(total*1.18/6).toFixed(2)} (TOTAL: <span class="totales">$${(total*1.18).toFixed(2)}</span>)</p> <input type="checkbox" value="Tarjeta de Crédito:" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 9 Cuotas de $${(total*1.27/9).toFixed(2)} (TOTAL: <span class="totales">$${(total*1.27).toFixed(2)}</span>)</p> <input type="checkbox" value="Tarjeta de Crédito:" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 12 Cuotas de $${(total*1.36/12).toFixed(2)} (TOTAL: <span class="totales">$${(total*1.36).toFixed(2)}</span>)</p> <input type="checkbox" value="Tarjeta de Crédito:" class="checkPago"> </div>
                                                         </div>`;

    document.getElementById("contCarrito").innerHTML += `<button class="botonesCarrito botonConfirmarCarrito" id="botonConfirmarCarrito">Confirmar forma de pago</button>`;

    document.getElementById("botonConfirmarCarrito").addEventListener("click", () => verificarCarrito(event));
       
    let checkPago = document.getElementsByClassName("checkPago");
    for (let check of checkPago) {
        check.addEventListener("click", seleccionCheckPago);
    }

    let botonesMas = document.getElementsByClassName("botonesMas");
    for( let boton of botonesMas) {
        boton.addEventListener("click", sumarAlCarrito);
    }

    let botonesMenos = document.getElementsByClassName("botonesMenos");
    for( let boton of botonesMenos) {
        boton.addEventListener("click", restarAlCarrito);
    }
}

function seleccionCheckPago () {
    let checkPago = document.getElementsByClassName("checkPago");
    for (let check of checkPago) {
        check.checked = false;
        this.checked = true;
    }
}

function verificarCarrito (e) {         
    e.preventDefault();     
    let error = true;
    let checksPagos = document.getElementsByClassName("checkPago");
    for (let check of checksPagos) {
        if (check.checked) {        //Si el checkbox esta seleccionado check.checked devuelve true
                formaDePago = check.value;
            confirmarCarrito();
            error = false;
        }
    }
    if (error) {
        if (document.getElementById("error") == null) {         
            document.getElementById("formasDePago").innerHTML += "<h4 id='error' style='color: red'> Seleccione una opción de pago </h4>";
        }
        let checkPago = document.getElementsByClassName("checkPago");
        for (let check of checkPago) {
            check.addEventListener("click", seleccionCheckPago);
        }
    }    
}

function confirmarCarrito () {

    let botonesMasMenos = document.getElementsByClassName("botonesMasMenos");    //Sacamos botones de sumar y restar al carrito
    for (let boton of botonesMasMenos) {
        boton.style = "display: none";
    }
      
    let opcionPago = "";
    let checksPagos = document.getElementsByClassName("checkPago");
    for (let check of checksPagos) {
        if (check.checked) {        //Si el checkbox esta seleccionado check.checked devuelve true
            opcionPago = check.previousElementSibling.innerHTML;
        }
    }
    
    //document.getElementById("totalCarrito").remove();
    document.getElementById("formasDePago").innerHTML = `<h2>Has seleccionado la siguiente forma de pago:</h2> <br>
                                                         <h2>${formaDePago}</h2>   
                                                         <h2>${opcionPago}<h2>`;

    document.getElementById("botonConfirmarCarrito").remove();
    document.getElementById("contCarrito").innerHTML += `<div class="flex">
                                                            <button class="botonesCarrito botonConfirmarCarrito" id="botonVolver">Volver</button>
                                                            <button class="botonesCarrito botonConfirmarCarrito" id="botonConfirmarPago">Confirmar pago</button>
                                                         </div>`;

    document.getElementById("botonVolver").addEventListener("click", () => mostrarCarrito());
    document.getElementById("botonConfirmarPago").addEventListener("click", finalizarPago);
}

function finalizarPago () {
    document.getElementById("contCarrito").innerHTML = `<div class="formasDePago">
                                                            <h2>El pago se ha realizado con éxito</h2> <br>
                                                            <h2>Gracias por tu compra!</h2>
                                                        </div>`;
    document.getElementById("carrito").innerHTML = "";
    carrito = [];                                                    
    localStorage.removeItem("carrito");
}

function sumarAlCarrito () {
    let id = this.value;
    let indexASumar = carrito.findIndex((el) => el.id == id);
    carrito[indexASumar].cantidad++;
    mostrarCarrito();
    actualizarIconoCarrito();
    guardarCarritoEnStorage();
}

function restarAlCarrito () {
    let id = this.value;
    let indexARestar = carrito.findIndex((el) => el.id == id);
    carrito[indexARestar].cantidad--;
    if (carrito[indexARestar].cantidad == 0) {
        carrito = carrito.filter((el) => el.id != id);       //Al llegar a cero borramos el producto del carrito
    }
    mostrarCarrito();
    actualizarIconoCarrito();
    guardarCarritoEnStorage();
    
    if (carrito.length == 0) {
        vaciarCarrito ();
    }    
}

function actualizarIconoCarrito () {
    let carritoCantidad = carrito.reduce((ac, el) => el.cantidad + ac, 0);      //Calculamos cantidad total de productos en el carrito

    if (carritoCantidad != 0) {
        document.getElementById("carrito").innerHTML = "";          //Mostramos Icono carrito
        document.getElementById("carrito").innerHTML += `<img src="./images/carrito.png" alt="" title="Ir al Carrito" class="carritoImg" id="carritoImg">
                                                         <img src="./images/vaciar.png" alt="Vaciar Carrito" class="vaciarCarritoImg" title="Vaciar Carrito" id="botonVaciar">   
                                                         <div class="carritoCant flex">${carritoCantidad}</div>`;
        document.getElementById("carritoImg").addEventListener("click", mostrarCarrito);    
        document.getElementById("botonVaciar").addEventListener("click", vaciarCarrito);                                                     
    } else {
        document.getElementById("carrito").innerHTML = "";          //Si la cantidad de productos en carrito es cero borramos icono carrito
        if(document.getElementById("contCarrito") != null)  {       //Si estamos en la pagina del carrito, mostramos mensaje "carrito vacio"
            document.getElementById("contProductos").innerHTML = "<h2>Carrito Vacío</h2>";
        }    
    }           
}

function cargarCategoriasEnMenu () {
    document.getElementById("menuProductos").innerHTML = "";
    document.getElementById("menuProductos").innerHTML +=
            `<li class="nav-item">
                <a class="nav-link active botonesCategorias" aria-current="page" id="home">Home</a>
            </li>`;
    for (let categoria of categorias) {
        document.getElementById("menuProductos").innerHTML +=
            `<li class="nav-item">
                <a class="nav-link active botonesCategorias" aria-current="page">${categoria}</a>
            </li>`;
    }        
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

function guardarCarritoEnStorage () {  
    let carritoEnJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoEnJSON);
}

function vaciarCarrito () { 
    carrito = [];
    actualizarIconoCarrito ();
    localStorage.removeItem("carrito");
}

