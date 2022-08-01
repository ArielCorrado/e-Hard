class memoriaRam {
    constructor ( descripcion, marca, modelo, tipo, tamano, frecuencia, precio) {
        this.descripcion = descripcion;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.tamano = tamano;
        this.frecuencia = frecuencia;
        this.precio = precio;
    
        this.describir = () => {
            return (`${this.descripcion} ${this.marca} ${this.modelo} ${this.tipo} ${this.tamano} ${this.frecuencia} $${this.precio}`);
        } 

    }
 
}

class motherboard {
    constructor ( descripcion, marca, modelo, socket, memoria, precio) {
        this.descripcion = descripcion;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.memoria = memoria;
        this.precio = precio;
    
        this.describir = () => {
            return (`${this.descripcion} ${this.marca} ${this.modelo} ${this.socket} ${this.memoria} $${this.precio}`);
        } 

    }
 
}

class micro {
    constructor ( descripcion, marca, modelo, socket, frecuencia, precio) {
        this.descripcion = descripcion;
        this.marca = marca;
        this.modelo = modelo;
        this.socket = socket;
        this.frecuencia = frecuencia;
        this.precio = precio;
    
        this.describir = () => {
            return (`${this.descripcion} ${this.marca} ${this.modelo} ${this.socket} ${this.frecuencia} $${this.precio}`);
        } 

    }
 
}

                                //Cargamos los productos
const listaMicros = [];

listaMicros[0] = new micro ("Microprocesador", "Amd", "Ryzen 3 4100", "AM4", "4.0Ghz", 20900);
listaMicros[1] = new micro ("Microprocesador", "Amd", "Ryzen 3 4350G", "AM4", "4.0Ghz", 32900);
listaMicros[2] = new micro ("Microprocesador", "Amd", "Ryzen 5 3600", "AM4", "4.2Ghz", 42400);
listaMicros[3] = new micro ("Microprocesador", "Amd", "Ryzen 5 5500", "AM4", "4.2Ghz", 46800);
listaMicros[4] = new micro ("Microprocesador", "Amd", "Ryzen 7 5700X", "AM4", "4.6Ghz", 66000);
listaMicros[5] = new micro ("Microprocesador", "Amd", "Ryzen 9 5900X", "AM4", "4.8Ghz", 110000);
listaMicros[6] = new micro ("Microprocesador", "Intel", "Celeron G6900", "LGA1700", "3.8Ghz", 12000);
listaMicros[7] = new micro ("Microprocesador", "Intel", "Pentium G7400", "LGA1700", "3.8Ghz", 15600);
listaMicros[8] = new micro ("Microprocesador", "Intel", "Core i3 12100", "LGA1700", "4.3Ghz", 25700);
listaMicros[9] = new micro ("Microprocesador", "Intel", "Core i5 12400", "LGA1700", "4.4Ghz", 45600);
listaMicros[10] = new micro ("Microprocesador", "Intel", "Core i7 12700KF", "LGA1700", "5.0Ghz", 87900);
listaMicros[11] = new micro ("Microprocesador", "Intel", "Core i9 12900KF", "LGA1700", "5.2Ghz", 147719);

const opcionesMicros = "Marca,Modelo,Socket,Frecuencia,Mostrar Todo".split(",");   //Array con las opciones a mostrar en el buscador




const listaMothers = [];

listaMothers[0] = new motherboard ("Motherboard", "Gigabyte", "GA-B450M DS3H", "AM4", "DDR4", 18000);
listaMothers[1] = new motherboard ("Motherboard", "Gigabyte", "GA-A520M S2H", "AM4", "DDR4", 19900);
listaMothers[2] = new motherboard ("Motherboard", "Gigabyte", "GA-B550M DS3H", "AM4", "DDR4", 32000);
listaMothers[3] = new motherboard ("Motherboard", "Gigabyte", "GA-X570S UD", "AM4", "DDR4", 64800);
listaMothers[4] = new motherboard ("Motherboard", "Gigabyte", "GA-X570S AORUS ELITE", "AM4", "DDR4", 95000);
listaMothers[5] = new motherboard ("Motherboard", "Msi", "PRO H610M", "LGA1700", "DDR4", 18200);
listaMothers[6] = new motherboard ("Motherboard", "Msi", "PRO H610M-G", "LGA1700", "DDR4", 20000);
listaMothers[7] = new motherboard ("Motherboard", "Msi", "PRO B660M-G", "LGA1700", "DDR4", 25800);
listaMothers[8] = new motherboard ("Motherboard", "Msi", "PRO Z690-A", "LGA1700", "DDR4", 47900);
listaMothers[9] = new motherboard ("Motherboard", "Msi", "Z690 Tomahawk WiFi", "LGA1700", "DDR4", 64900);

const opcionesMothers = "Marca,Modelo,Socket,Memoria,Mostrar Todo".split(",");   //Array con las opciones a mostrar en el buscador




const listaMemorias = [];

listaMemorias[0] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "4gb", "2666mhz", 4940);
listaMemorias[1] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "4gb", "3200mhz", 7900);
listaMemorias[2] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "8gb", "2666mhz", 7450);
listaMemorias[3] = new memoriaRam ("Memoria", "kingston", "fury Rgb", "ddr4", "8gb", "2666mhz", 9999);
listaMemorias[4] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "8gb", "3200mhz", 9250);
listaMemorias[5] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "16gb", "2666mhz", 13600);
listaMemorias[6] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "16gb", "3200mhz", 16700);
listaMemorias[7] = new memoriaRam ("Memoria", "kingston", "fury", "ddr4", "16gb", "3600mhz", 19000);
listaMemorias[8] = new memoriaRam ("Memoria", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "2666mhz", 20500);
listaMemorias[9] = new memoriaRam ("Memoria", "Corsair", "Vengance Rgb Pro Blanco", "ddr4", "16gb (2x8Gb)", "3600mhz", 24000);

const opcionesMemorias = "Marca,Modelo,Tipo,Tamano,Frecuencia,Mostrar Todo".split(",");   //Array con las opciones a mostrar en el buscador



const opcionesHardware = "Microprocesadores,Motherboards,Memorias RAM".split(",");



alert("Bienvenido a e-Hard computación, a continuación podrás buscar y elegir hardware para tu PC, presiona 'ENTER' para continuar");

let o;
let op;
let opc;
let list;
let componenteElegido;
let filtroComponentes = [];

do {o = prompt(`Elige una opción de busqueda:\n${verArrayConOpciones(opcionesHardware)}`);

    switch (o) {

        case "1": op = prompt(`Microprocesadores - Elige una opción - puedes filtrar por:\n${verArrayConOpciones(opcionesMicros)}`);
        op = opcionesMicros[parseInt(op)-1];
        op = op.toLowerCase();
        list = (listar(op,listaMicros))
        
        opc = prompt (verArrayConOpciones(list));
        opc = list[parseInt(opc)-1];
        filtroComponentes = listaMicros.filter((el) => el[op] == opc);
        if (filtroComponentes.length > 1) {      
            opc = prompt(mostrarDescripcion(filtroComponentes));
            componenteElegido = filtroComponentes[parseInt(opc)-1];
            alert(`Has elegido:\n${componenteElegido.describir()}`);
        } else alert(`Has elegido:\n${filtroComponentes[0].describir()}`); 

        break;



        case "2": op = prompt (`Motherboards - Elige una opción - puedes filtrar por:\n${verArrayConOpciones(opcionesMothers)}`);
        op = opcionesMothers[parseInt(op)-1];
        op = op.toLowerCase();
        list = (listar(op,listaMothers))
        
        opc = prompt (verArrayConOpciones(list));
        opc = list[parseInt(opc)-1];
        filtroComponentes = listaMothers.filter((el) => el[op] == opc);
        if (filtroComponentes.length > 1) {      
            opc = prompt(mostrarDescripcion(filtroComponentes));
            componenteElegido = filtroComponentes[parseInt(opc)-1];
            alert(`Has elegido:\n${componenteElegido.describir()}`);
        } else alert(`Has elegido:\n${filtroComponentes[0].describir()}`); 

        break;



        case "3": op = prompt (`Memorias RAM - Elige una opción - puedes filtrar por:\n${verArrayConOpciones(opcionesMemorias)}`);
        op = opcionesMemorias[parseInt(op)-1];
        op = op.toLowerCase();
        list = (listar(op,listaMemorias))
        
        opc = prompt (verArrayConOpciones(list));
        opc = list[parseInt(opc)-1];
        filtroComponentes = listaMemorias.filter((el) => el[op] == opc);
        if (filtroComponentes.length > 1) {      
            opc = prompt(mostrarDescripcion(filtroComponentes));
            componenteElegido = filtroComponentes[parseInt(opc)-1];
            alert(`Has elegido:\n${componenteElegido.describir()}`);
        } else alert(`Has elegido:\n${filtroComponentes[0].describir()}`); 

        break;




        default: alert("Opcion incorrecta, vuelve a intentar");
        break;
    }

} while (o != "1" && o !="2" && o !="3")






function verArrayConOpciones (array) {       //Esta función genera un string para mostrar en pantalla el cual es una lista con número
    let lista = "";                          //de opciones. Para un determinado array
    let i = 1;
    for (let el of array) {
        lista += `${i}: ${el}\n`;
        i++;
    }
    return lista;
}


function listar (opcion, lista) {           //Esta función obtiene determinados valores de un array
    let valores = [];                       //por ejemplo las diferentes marcas que hay en la lista de memorias.
    let i = 0;                              //"opcion" es un string y "lista" es un array
    valores[i] = lista[0][opcion];
    for (let elemento of lista) {
        
        if (!(valores.some((el) => el == elemento[opcion])))   {
            i++;
            valores[i] = elemento[opcion];
        }
    }
    return valores;
}


function mostrarDescripcion (lista) {             //Esta función crea un string con números de opcion para las descripciones 
    let desc = "";                                //que genera el método "describir()"
    let i = 1;
    for (let list of lista) {
        desc += `${i++}: ${list.describir()}\n`;
    }
    return desc;
}









/*
let total;
let productosElegidos = "";
let cuotas;
let recargo;
let descuentoEyT = 10;          //Descuento efectivo y transferencia en %
let opcion;
let confirmar;

do {    

    total = 0;
    productosElegidos = "";

    alert("Bienvenido a e-Hard Computación a continuación podrás elegir un combo de actualización para tu PC que incluye MotherBoard, Microprocesador y memoria RAM. Presiona Enter para comenzar");     

    opciones (listaMicros);
    opciones (listaMothers);
    opciones (listaMemorias);

    alert ("Has elegido los siguientes componentes:\n\n" + productosElegidos + "\n" + "TOTAL: $" + total);

    metodosDePago ();
        
} while(confirmar == null);


function metodosDePago () {

    do {
        opcion = prompt ("Como desea pagar?:\n\n 1: Efectivo / transferencia bancaria (10% de descuento) \n 2: Tarjeta de credito en cuotas");
        switch (opcion) {
            case "1": 
                confirmar = prompt("El total a pagar es: $" + total * (1 - descuentoEyT/100) + "\nPresione 'Aceptar' para confirmar o 'Cancelar' para volver a empezar");
                break;
            case "2": 
                do {
                    cuotas = prompt("Elija la cantidad de cuotas \n\n" +
                    "1: 1 x $" + total + "\n" + 
                    "3: 3 x $" + ((total * 1.09)/3).toFixed(2) + " ($" + (total * 1.09).toFixed(2) + ")\n" + 
                    "6: 6 x $" + ((total * 1.18)/6).toFixed(2) + " ($" + (total * 1.18).toFixed(2) + ")\n" + 
                    "12: 12 x $" + ((total * 1.27)/12).toFixed(2) + " ($" + (total * 1.27).toFixed(2) + ")" );
                    
                        switch (cuotas) {
                            case "1": 
                                recargo = 1;
                                informarCuotas();
                                break;
                            case "3": 
                                recargo = 1.09;
                                informarCuotas();
                                break;    
                            case "6": 
                                recargo = 1.18;
                                informarCuotas();
                                break;  
                            case "12": 
                                recargo = 1.27;
                                informarCuotas();
                                break; 
                            default:
                                alert("La opción ingresada no es correcta, vuelva a intentar");    
                        }
                    
                } while (cuotas!= "1" && cuotas!="3" && cuotas!="6" && cuotas!="12");
                break;
                
            default:  
                alert("La opción ingresada no es correcta, vuelva a intentar");

        }
        
    } while (opcion!="1" && opcion!="2")

}


function informarCuotas () {

    confirmar = prompt("Has elegido la siguiente forma de pago:\n\n" + 
            cuotas + " cuota/s de $" + (total * recargo /cuotas).toFixed(2) + " por un total de: $" + (total * recargo).toFixed(2) + 
            "\nPresione 'Aceptar' para confirmar o 'Cancelar' para volver a empezar");
}


function opciones (list) { 
  
    let i = 1;                                          //Muestra en pantalla la lista de micros/mothers/memorias
    let mensaje = ""; 
    for (let producto of list) {
        mensaje += `\n${i}: ${producto.describir()} $${producto.precio}`;
        i++;  
    }    

    let opcion;
    let salir;
  
    do {
        
        opcion = parseFloat(prompt(`Elige un componente de la siguiente lista ingresando el número de opción: ${mensaje}`));
                
        if (opcion%1 == 0  && opcion >= 1 && opcion <= list.length)  {          //Si "opcion" es entero entre 1 y el número de elementos del array..
            
            total += list[opcion-1].precio;
            productosElegidos += `${list[opcion-1].describir()}\n`;
            salir = true;

        } else {
            alert("La opción ingresada no es correcta, vuelva a intentar");
            salir = false;
        }
    
    } while (!salir)

}




*/

