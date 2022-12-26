
class Productos{

    constructor(nombreProducto,precio,descipcion,catergoria,oferta){
        this.nombreProducto = nombreProducto
        this.precio = precio
        this.descipcion = descipcion
        this.catergoria = catergoria
        this.oferta = oferta
    }

}

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).
function descuento(precio){
    return precio - (precio * 15 / 100 );
}

function oferta(){
    let ofertaCamistas = camisetas.filter(function(camisetaTrue){
    if(camisetaTrue.oferta === true){
        console.log (camisetaTrue.nombreProducto, camisetaTrue.precio, ", Precio -15% Dto:", descuento(camisetaTrue.precio))
    }
    })
}
// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
function ordenarNombre(){
    camisetas.sort((a, b) => {
        if(a.nombreProducto < b.nombreProducto) {
            return -1; 
        }
        if(a.nombreProducto > b.nombreProducto) {
            return 1;
        }
        return 0;
    });
        console.log("A-Z")
        camisetas.forEach(function(camiseta){
            console.log(camiseta.nombreProducto)
    })
}
function copiaCamiseta(){
    const copiaArr = [...array];
}


// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.
function verOferta(){
    const aceptoOferta = confirm ("Desea ver Oferta??");
        if (aceptoOferta){
            return oferta();
        }else if(!aceptoOferta){
            return "oferta no visualizadas";
        }
}

// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().

function buscarCamiseta(){

    let camisetaBuscada = prompt("Que camiseta desea buscar?");

    let buscarArrayCamiseta = camisetas.find(function(nombreCamiseta){
        let seEncontro = nombreCamiseta.nombreProducto === camisetaBuscada
        if(seEncontro){
            alert(`Se Encontro 1 resultado \nNombre ${nombreCamiseta.nombreProducto} \nEl precio es $${nombreCamiseta.precio} \nDescripción: ${nombreCamiseta.descipcion}`);
        }else if(!seEncontro){
            console.log('no se encontro resultados');
        }
        
    })
}

console.log(buscarCamiseta());