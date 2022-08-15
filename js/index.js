class memoriaRam {
    constructor (id, categoria, marca, modelo, tipo, capacidad, frecuencia, precio, imgScr, cantidad ) {
        this.id = id;
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

        this.describir = `Memoria Ram ${this.marca} ${this.modelo} ${this.tipo} ${this.capacidad} ${this.frecuencia}`;
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

                                //Cargamos los productos
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



const listaMothers = [];

listaMothers[0] = new motherboard ("mb1", "Motherboards", "Gigabyte", "GA-B450M DS3H", "AM4", "DDR4", 18000, "./images/mb0.jpeg");
listaMothers[1] = new motherboard ("mb2", "Motherboards", "Gigabyte", "GA-A520M S2H", "AM4", "DDR4", 19900, "./images/mb1.jpeg");
listaMothers[2] = new motherboard ("mb3", "Motherboards", "Gigabyte", "GA-B550M DS3H", "AM4", "DDR4", 32000, "./images/mb2.jpeg");
listaMothers[3] = new motherboard ("mb4", "Motherboards", "Gigabyte", "GA-X570S UD", "AM4", "DDR4", 64800, "./images/mb3.jpeg");
listaMothers[4] = new motherboard ("mb5", "Motherboards", "Gigabyte", "GA-X570S AORUS ELITE", "AM4", "DDR4", 95000, "./images/mb4.jpeg");
listaMothers[5] = new motherboard ("mb6", "Motherboards", "Msi", "PRO H610M", "LGA1700", "DDR4", 18200, "./images/mb5.jpg");
listaMothers[6] = new motherboard ("mb7", "Motherboards", "Msi", "PRO H610M-G", "LGA1700", "DDR4", 20000, "./images/mb6.jpeg");
listaMothers[7] = new motherboard ("mb8", "Motherboards", "Msi", "PRO B660M-G", "LGA1700", "DDR4", 25800, "./images/mb7.jpg");
listaMothers[8] = new motherboard ("mb9", "Motherboards", "Msi", "PRO Z690-A", "LGA1700", "DDR4", 47900, "./images/mb8.jpeg");
listaMothers[9] = new motherboard ("mb10", "Motherboards", "Msi", "Z690 Tomahawk WiFi", "LGA1700", "DDR4", 64900, "./images/mb9.jpeg");



const listaMemorias = [];

listaMemorias[0] = new memoriaRam ("mr1", "Memorias RAM", "kingston", "fury", "ddr4", "4gb", "2666mhz", 4940, "./images/mr0.jpeg");
listaMemorias[1] = new memoriaRam ("mr2", "Memorias RAM", "kingston", "fury", "ddr4", "4gb", "3200mhz", 7900, "./images/mr0.jpeg");
listaMemorias[2] = new memoriaRam ("mr3", "Memorias RAM", "kingston", "fury", "ddr4", "8gb", "2666mhz", 7450, "./images/mr0.jpeg");
listaMemorias[3] = new memoriaRam ("mr4", "Memorias RAM", "kingston", "fury Rgb", "ddr4", "8gb", "2666mhz", 9999, "./images/mr1.jpeg");
listaMemorias[4] = new memoriaRam ("mr5", "Memorias RAM", "kingston", "fury", "ddr4", "8gb", "3200mhz", 9250, "./images/mr0.jpeg");
listaMemorias[5] = new memoriaRam ("mr6", "Memorias RAM", "kingston", "fury", "ddr4", "16gb", "2666mhz", 13600, "./images/mr0.jpeg");
listaMemorias[6] = new memoriaRam ("mr7", "Memorias RAM", "kingston", "fury", "ddr4", "16gb", "3200mhz", 16700, "./images/mr0.jpeg");
listaMemorias[7] = new memoriaRam ("mr8", "Memorias RAM", "kingston", "fury", "ddr4", "16gb", "3600mhz", 19000, "./images/mr0.jpeg");
listaMemorias[8] = new memoriaRam ("mr9", "Memorias RAM", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "2666mhz", 20500, "./images/mr2.jpeg");
listaMemorias[9] = new memoriaRam ("mr10", "Memorias RAM", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "3600mhz", 24000, "./images/mr3.jpeg");


let opcionesElegidas = [];

let botones;
let filtro;
let opcionesDeBusqueda;
let filtroCategoria;


let carrito = JSON.parse(localStorage.getItem("carrito"));
if (carrito == null) {
    carrito = [];
} else if (carrito.length > 0) {
    actualizarIconoCarrito();
}
 

const todosLosProductos = listaMicros.concat(listaMothers,listaMemorias);


mostrarProductos (todosLosProductos);
let categorias = cargarOpciones (todosLosProductos, "categoria")
cargarCategoriasEnMenu ();

botonesCategorias = document.getElementsByClassName("botonesCategorias");
for (let boton of botonesCategorias) {
    boton.addEventListener("click", filtrarCategoria);
}

document.getElementById("botonBuscar").addEventListener("click", buscarProducto);


function buscarProducto () {
    filtro = [];
    let producto = document.getElementById("buscadorInput").value;
    if (producto != "") {
        filtro = todosLosProductos.filter((el) => (el.describir.toLowerCase()).includes(producto.toLowerCase()));
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
    if (categoria != "Todos") {
        filtro = todosLosProductos.filter((prod) => prod.categoria == categoria);
        document.getElementById("main").style = "grid-template-columns: max-content auto;"      //Dejo lugar para el filtro
        document.getElementById("contFiltro").style = "display: flex";
            filtroCategoria = filtro;////
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
        document.getElementById("contFiltro").innerHTML += `<b><h4>${opcion}</h5></b>`  //Acá opcion puede ser "Marca"

        opcion = opcion.toLowerCase();              
                    
        subOpciones = cargarOpciones (filtro, opcion)   //Buscamos las diferentes opciones de Marcas por ejemplo.
                    
        for (let opc of subOpciones) {              //Si la cantidad de subopciones es 1 sacamos el checkbox
            if (subOpciones.length > 1) {           
                document.getElementById("contFiltro").innerHTML += `<div> <p class="subOpciones">${opc}</p> <input name="${opcion}" type="checkbox" class="checkSubOpciones"> </div>`
            } else {
                if (opcionesElegidas.some((el) => el.opcion == opcion)) { ////
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
}

function borrarFiltro () {
    
    filtro = filtroCategoria;

    let opcionE = this.title.toLowerCase();
    opcionesElegidas = opcionesElegidas.filter((el) => el.opcion != opcionE);   //Acá las opciones elegidas puedens ser: "Marca" "Socket" etc
                                                                               //Sacamos del array la opcion eliminada del fitro 
    for (let opc of opcionesElegidas) {
        filtro = filtro.filter((el) => el[opc.opcion] == opc.subOpcion);
    }
        
    mostrarProductos(filtro);
    mostrarFiltro();
}

function listarSubOpciones () {
    let opcion = this.name.toLowerCase();        
    let subOpcion = this.previousElementSibling.innerHTML;
    opcionesElegidas.push({opcion: opcion, subOpcion: subOpcion}); 
    filtro = filtro.filter((el) => el[opcion] == subOpcion);
    mostrarProductos (filtro);
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
        </div>`
    }

    let botonesCarrito = document.getElementsByClassName("botonesCarrito");

    for (let boton of botonesCarrito) {
        boton.addEventListener("click", agregarAlCarrito)
    }
}

function agregarAlCarrito () {
    let producto = todosLosProductos.find((el) => el.id == this.value); //Buscamos el producto elegido por su id en todos los productos
    
    let enCarrito = carrito.findIndex((el) => el.id == producto.id) //Verificamos si el producto agregado ya está en el carrito
            
    if (enCarrito == -1) {
        carrito.push(producto);                             //Si no estñá lo pusheamos
        producto.cantidad = 1;                              //Le ponemos cantidad en 1 ya que por defecto la cantidad no viene seteada
    } else {
        carrito[enCarrito].cantidad ++;                     //Si está le aumentamos la cantidad        
    }
    
    let carritoCantidad = carrito.reduce((ac, el) => el.cantidad + ac, 0);              //Calculamos la cantidad total de productos en el carrito

    document.getElementById("carrito").innerHTML = "";          //Mostramos Icono carrito
    document.getElementById("carrito").innerHTML += `<img src="./images/carrito.png" alt=""></img>
                                                     <div class="carritoCant flex">${carritoCantidad}</div>`;

    document.getElementById("carrito").addEventListener("click", mostrarCarrito);        
        guardarCarritoEnStorage ();////                                        
}

function mostrarCarrito () {
        
    document.getElementById("contFiltro").style.display = "none";
    document.getElementById("main").style = "grid-template-columns: 0 100%;";
    document.getElementById("contProductos").innerHTML = "";
    
    document.getElementById("contProductos").innerHTML += '<div class="contCarrito flex" id="contCarrito"> </div>';
         
    for (let producto of carrito) {
        document.getElementById("contCarrito").innerHTML += `<div class="productosCarrito flex">
                                                                <div style="height:100%; position:relative">
                                                                    <img class="imgProductosCarrito" src=${producto.imgScr} alt="">
                                                                    <div class="carritoCantidades flex">x${producto.cantidad}</div>
                                                                </div>
                                                                <button value="${producto.id}" class="botonesMasMenos botonesMenos">-</button>
                                                                <button value="${producto.id}" class="botonesMasMenos botonesMas">+</button>
                                                                <h6 class="carritoDescripciones">${producto.describir}</h6>
                                                                <h2>$${producto.precio} x ${producto.cantidad} = $${producto.precio * producto.cantidad}</h2>
                                                            </div>`
    }                            
    let total = carrito.reduce((ac, el) => ac + ((el.precio) * (el.cantidad)), 0 )
    document.getElementById("contCarrito").innerHTML += `<h2 class="total" id="totalCarrito">TOTAL $${total}<h2>`
    
    document.getElementById("contCarrito").innerHTML += `<div class="formasDePago" id="formasDePago">
                                                            <h3> Selecciona una forma de pago: </h3><br>
                                                            <div class="contTextoPago flex"><p class="textoPago"> Efectivo/Transferencia (TOTAL: $${total * 0.9}) (10% OFF)</p><input type="checkbox" class="checkPago"> </div> <br>  

                                                            <h3> Tarjetas de credito: </h3> <br>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 1 Cuota de $${total} </p> <input type="checkbox" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 3 Cuotas de $${(total*1.09/3).toFixed(2)} (TOTAL: $${(total*1.09).toFixed(2)})</p> <input type="checkbox" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 6 Cuotas de $${(total*1.18/6).toFixed(2)} (TOTAL: $${(total*1.18).toFixed(2)})</p> <input type="checkbox" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 9 Cuotas de $${(total*1.27/9).toFixed(2)} (TOTAL: $${(total*1.27).toFixed(2)})</p> <input type="checkbox" class="checkPago"> </div>
                                                            <div class="contTextoPago flex"> <p class="textoPago"> 12 Cuotas de $${(total*1.36/12).toFixed(2)} (TOTAL: $${(total*1.36).toFixed(2)})</p> <input type="checkbox" class="checkPago"> </div>
                                                         </div>`

    document.getElementById("contCarrito").innerHTML += `<button class="botonesCarrito botonConfirmarCarrito" id="botonConfirmarCarrito">Confirmar forma de pago</button>`
                                                       
    document.getElementById("botonConfirmarCarrito").addEventListener("click", () => verificarCarrito(event))
       
    let checkPago = document.getElementsByClassName("checkPago");
    for (let check of checkPago) {
        check.addEventListener("click", seleccionCheckPago)
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

function verificarCarrito (e) {             //
    e.preventDefault();     
    let error = true;
    let checksPagos = document.getElementsByClassName("checkPago");
    for (let check of checksPagos) {
        if (check.checked) {        //Si el checkbox esta seleccionado check.checked devuelve true
            confirmarCarrito();
            error = false;
        }
    }
    if (error) {
        if (document.getElementById("error") != null) {         
            document.getElementById("error").remove();
        }
        document.getElementById("formasDePago").innerHTML += "<h4 id='error' style='color: red'>Seleccione una opción de pago</h4>";
    }    
}

function confirmarCarrito () {
   
    let opcionPago = "";
    let checksPagos = document.getElementsByClassName("checkPago");
    for (let check of checksPagos) {
        if (check.checked) {        //Si el checkbox esta seleccionado check.checked devuelve true
            opcionPago = check.previousElementSibling.innerHTML;
        }
    }
    
    document.getElementById("totalCarrito").remove();
    document.getElementById("formasDePago").innerHTML = `<h2>Has seleccionado la siguiente forma de pago:</h2> <br>
                                                         <h2>${opcionPago}<h2>`
    document.getElementById("botonConfirmarCarrito").remove();
    document.getElementById("contCarrito").innerHTML += `<div class="flex">
                                                            <button class="botonesCarrito botonConfirmarCarrito" id="botonVolver">Volver</button>
                                                            <button class="botonesCarrito botonConfirmarCarrito" id="botonConfirmarPago">Confirmar pago</button>
                                                         </div>`

    document.getElementById("botonVolver").addEventListener("click", () => mostrarCarrito());

    document.getElementById("botonConfirmarPago").addEventListener("click", finalizarPago);
}

function finalizarPago () {
    document.getElementById("contCarrito").innerHTML = `<div class="formasDePago">
                                                            <h2>El pago se ha realizado con éxito</h2> <br>
                                                            <h2>Gracias por tu compra!</h2>
                                                        </div>`
    carrito = [];
    document.getElementById("carrito").innerHTML = "";
}

function seleccionCheckPago () {
    let checkPago = document.getElementsByClassName("checkPago");
    for (let check of checkPago) {
    check.checked = false;
    this.checked = true;
    }
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
    if(carrito[indexARestar].cantidad == 0) {
        carrito = carrito.filter((el) => el.id != id)       //Al llegar a cero borramos el producto del carrito
        mostrarCarrito();
        actualizarIconoCarrito();
    }
    mostrarCarrito();
    actualizarIconoCarrito();
        guardarCarritoEnStorage();
}

function actualizarIconoCarrito () {
    let carritoCantidad = carrito.reduce((ac, el) => el.cantidad + ac, 0);      //Calculamos cantidad total de productos en el carrito

    if (carritoCantidad != 0) {
        document.getElementById("carrito").innerHTML = "";          //Mostramos Icono carrito
        document.getElementById("carrito").innerHTML += `<img src="./images/carrito.png" alt=""></img>
                                                        <p class="carritoCant flex">${carritoCantidad}</p>`;
    } else {
        document.getElementById("carrito").innerHTML = "";          //Si la cantidad de productos en carrito es cero borramos icono carrito
        document.getElementById("contProductos").innerHTML = "<h2>Carrito Vacío</h2>"
    }           
    document.getElementById("carrito").addEventListener("click", mostrarCarrito);  ////                                      
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

function guardarCarritoEnStorage () {  ////
    let carritoEnJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoEnJSON);
}
