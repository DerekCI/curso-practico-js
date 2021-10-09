//const precioOriginal = 100;
//const descuento = 15;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log(`El precio original es: ${precioOriginal},
//descuento ${descuento}%
//El precio con descuento es: ${precioConDescuento}`);


//

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; //se obtiene el valor agregado en el html
    
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; //se obtiene el valor agregado en la pagina

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue); //se guarda en una variable para usar despues 

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = (`El precio con descuento son: ${precioConDescuento}`)
}


