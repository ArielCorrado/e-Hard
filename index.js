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

listaMicros[0] = new micro ("Microprocesadores", "Amd", "Ryzen 3 4100", "AM4", "4.0Ghz", 20900);
listaMicros[1] = new micro ("Microprocesadores", "Amd", "Ryzen 3 4350G", "AM4", "4.0Ghz", 32900);
listaMicros[2] = new micro ("Microprocesadores", "Amd", "Ryzen 5 3600", "AM4", "4.2Ghz", 42400);
listaMicros[3] = new micro ("Microprocesadores", "Amd", "Ryzen 5 5500", "AM4", "4.2Ghz", 46800);
listaMicros[4] = new micro ("Microprocesadores", "Amd", "Ryzen 7 5700X", "AM4", "4.6Ghz", 66000);
listaMicros[5] = new micro ("Microprocesadores", "Amd", "Ryzen 9 5900X", "AM4", "4.8Ghz", 110000);
listaMicros[6] = new micro ("Microprocesadores", "Intel", "Celeron G6900", "LGA1700", "3.8Ghz", 12000);
listaMicros[7] = new micro ("Microprocesadores", "Intel", "Pentium G7400", "LGA1700", "3.8Ghz", 15600);
listaMicros[8] = new micro ("Microprocesadores", "Intel", "Core i3 12100", "LGA1700", "4.3Ghz", 25700);
listaMicros[9] = new micro ("Microprocesadores", "Intel", "Core i5 12400", "LGA1700", "4.4Ghz", 45600);
listaMicros[10] = new micro ("Microprocesadores", "Intel", "Core i7 12700KF", "LGA1700", "5.0Ghz", 87900);
listaMicros[11] = new micro ("Microprocesadores", "Intel", "Core i9 12900KF", "LGA1700", "5.2Ghz", 147719);

const opcionesMicros = "Marca,Socket,Frecuencia,Mostrar Todo".split(",");   //Array con las opciones a mostrar en el buscador




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

const opcionesMothers = "Marca,Socket,Memoria,Mostrar Todo".split(",");   //Array con las opciones a mostrar en el buscador




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

const opcionesMemorias = "Marca,Modelo,Tipo,Tamano,Frecuencia,Mostrar Todo".split(",");   //Array con las opciones a mostrar en el buscador


const opcionesProductos  = [];
opcionesProductos[0] = opcionesMicros;
opcionesProductos[1] = opcionesMothers;
opcionesProductos[2] = opcionesMemorias;

//const opcionesHardware = "Microprocesadores,Motherboards,Memorias RAM".split(",");



alert("Bienvenido a e-Hard computación, a continuación podrás buscar y elegir hardware para tu PC, presiona 'ENTER' para continuar");



let todosLosProductos = [];
todosLosProductos = todosLosProductos.concat(listaMicros, listaMothers, listaMemorias);
let opciones = listarOpciones ("descripcion",todosLosProductos);
let listaDeOpciones = verArrayComoLista (opciones);
let op = prompt (`Elige una opción de busqueda:\n${listaDeOpciones}`)       //op es el numero de opción: 1, 2, 3 etc.

let opc = opciones [parseInt(op)-1];                                        //opc es el nombre de la opcion: Microprocesadores, Motherboards, etc    
let filtro = todosLosProductos.filter((el) => el.descripcion == opc);

let opcionesAmostrar = opcionesProductos[parseInt(op)-1];
op = prompt (`${opc} - Elige una opción: Puedes filtrar por:\n${verArrayComoLista(opcionesAmostrar)}`);

opc = opcionesAmostrar [parseInt(op)-1];
opc = opc.toLowerCase();                        //opc puede ser por ej: "marca"
opciones = listarOpciones (opc, filtro);
listaDeOpciones = verArrayComoLista (opciones);
op = prompt (`Elige una opción de busqueda:\n${listaDeOpciones}`);     

op = opciones [parseInt(op)-1];                 //op puede ser por ej: "Amd";
filtro = filtro.filter((el) => el[opc] == op);
op = prompt (`Elige una opción:\n${mostrarDescripciones(filtro)}`);

productoElegido = filtro [parseInt(op)-1];

prompt (`Has elegido:\n ${(productoElegido.describir())}`);





function listarOpciones (opcion, lista) {     //Esta función obtiene determinados valores de un array de objetos
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
    let lista = "";                          //de opciones. Para un determinado array
    let i = 1;
    for (let el of array) {
        lista += `${i}: ${el}\n`;
        i++;
    }
    return lista;
}


function mostrarDescripciones (lista) {             //Esta función crea un string con números de opcion para las descripciones 
    let desc = "";                                //que genera el método "describir()"
    let i = 1;
    for (let list of lista) {
        desc += `${i++}: ${list.describir()}\n`;
    }
    return desc;
}






/*
let o;
let op;
let opc;
let list;
let salir;
let componenteElegido;
let filtroComponentes = [];

do {o = prompt(`Elige una opción de busqueda:\n${verArrayConOpciones(opcionesHardware)}`);

    switch (o) {

        case "1": 
        do {
            op = prompt(`Microprocesadores - Elige una opción - puedes filtrar por:\n${verArrayConOpciones(opcionesMicros)}`);
            if (parseFloat(op)%1 == 0 && parseFloat(op) >= 1 && parseFloat(op) <= opcionesMicros.length) {   
                op = opcionesMicros[parseInt(op)-1];
                op = op.toLowerCase();
                list = (listar(op,listaMicros));   
                salir = true;
            }   
            else {
                (salir = false);  
                alert("Opcion incorrecta, vuelve a intentar");  
            }    
        } while (salir == false)    
            
        do  {
            opc = prompt (verArrayConOpciones(list));
            if (parseFloat(opc)%1 == 0 && parseFloat(opc) >= 1 && parseFloat(opc) <= list.length) {
                opc = list[parseInt(opc)-1];
                filtroComponentes = listaMicros.filter((el) => el[op] == opc);
                if (filtroComponentes.length > 1) {   
                    do {
                        opc = prompt(mostrarDescripciones(filtroComponentes));
                        if (parseFloat(opc)%1 == 0 && parseFloat(opc) >= 1 && parseFloat(opc) <= filtroComponentes.length) {
                            componenteElegido = filtroComponentes[parseInt(opc)-1];
                            alert(`Has elegido:\n${componenteElegido.describir()}`);
                            salir = true;
                        }    
                        else {
                            salir = false;    
                            alert("Opcion incorrecta, vuelve a intentar");
                        }
                    } while (salir == false)   

                } 
                else {alert(`Has elegido:\n${filtroComponentes[0].describir()}`)}; 
                salir = true;
            }   
            else {
                (salir = false);  
                alert("Opcion incorrecta, vuelve a intentar");  
            }    
        } while (salir == false)    

        break;



        case "2":         
        do {
            op = prompt(`Motherboards - Elige una opción - puedes filtrar por:\n${verArrayConOpciones(opcionesMothers)}`);
            if (parseFloat(op)%1 == 0 && parseFloat(op) >= 1 && parseFloat(op) <= opcionesMothers.length) {   
                op = opcionesMothers[parseInt(op)-1];
                op = op.toLowerCase();
                list = (listar(op,listaMothers));   
                salir = true;
            }   
            else {
                (salir = false);  
                alert("Opcion incorrecta, vuelve a intentar");  
            }    
        } while (salir == false)    
            
        do  {
            opc = prompt (verArrayConOpciones(list));
            if (parseFloat(opc)%1 == 0 && parseFloat(opc) >= 1 && parseFloat(opc) <= list.length) {
                opc = list[parseInt(opc)-1];
                filtroComponentes = listaMothers.filter((el) => el[op] == opc);
                if (filtroComponentes.length > 1) {   
                    do {
                        opc = prompt(mostrarDescripciones(filtroComponentes));
                        if (parseFloat(opc)%1 == 0 && parseFloat(opc) >= 1 && parseFloat(opc) <= filtroComponentes.length) {
                            componenteElegido = filtroComponentes[parseInt(opc)-1];
                            alert(`Has elegido:\n${componenteElegido.describir()}`);
                            salir = true;
                        }    
                        else {
                            salir = false;    
                            alert("Opcion incorrecta, vuelve a intentar");
                        }
                    } while (salir == false)   

                } 
                else {alert(`Has elegido:\n${filtroComponentes[0].describir()}`)}; 
                salir = true;
            }   
            else {
                (salir = false);  
                alert("Opcion incorrecta, vuelve a intentar");  
            }    
        } while (salir == false)    

        break;



        case "3": 
        do {
            op = prompt(`Memorias RAM - Elige una opción - puedes filtrar por:\n${verArrayConOpciones(opcionesMemorias)}`);
            if (parseFloat(op)%1 == 0 && parseFloat(op) >= 1 && parseFloat(op) <= opcionesMemorias.length) {   
                op = opcionesMemorias[parseInt(op)-1];
                op = op.toLowerCase();
                list = (listar(op,listaMemorias));   
                salir = true;
            }   
            else {
                (salir = false);  
                alert("Opcion incorrecta, vuelve a intentar");  
            }    
        } while (salir == false)    
            
        do  {
            opc = prompt (verArrayConOpciones(list));
            if (parseFloat(opc)%1 == 0 && parseFloat(opc) >= 1 && parseFloat(opc) <= list.length) {
                opc = list[parseInt(opc)-1];
                filtroComponentes = listaMemorias.filter((el) => el[op] == opc);
                if (filtroComponentes.length > 1) {   
                    do {
                        opc = prompt(mostrarDescripciones(filtroComponentes));
                        if (parseFloat(opc)%1 == 0 && parseFloat(opc) >= 1 && parseFloat(opc) <= filtroComponentes.length) {
                            componenteElegido = filtroComponentes[parseInt(opc)-1];
                            alert(`Has elegido:\n${componenteElegido.describir()}`);
                            salir = true;
                        }    
                        else {
                            salir = false;    
                            alert("Opcion incorrecta, vuelve a intentar");
                        }
                    } while (salir == false)   

                } 
                else {alert(`Has elegido:\n${filtroComponentes[0].describir()}`)}; 
                salir = true;
            }   
            else {
                (salir = false);  
                alert("Opcion incorrecta, vuelve a intentar");  
            }    
        } while (salir == false)    

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


function mostrarDescripciones (lista) {             //Esta función crea un string con números de opcion para las descripciones 
    let desc = "";                                //que genera el método "describir()"
    let i = 1;
    for (let list of lista) {
        desc += `${i++}: ${list.describir()}\n`;
    }
    return desc;
}

*/



