function compra(precio, descuento, tarjeta){
    const porcentajePrecio = 100 - descuento;
    const compra = (precio * porcentajePrecio)/100;
    const total = (compra * (100 - tarjeta))/100;
    return total;
}

function calcularCompra(){
    const inputP = document.getElementById("input-price");
    const valueP = inputP.value;
    const inputD = document.getElementById("input-discount");
    const valueD = inputD.value;
    const inputM = document.getElementById("input-membership");
    const valueM = inputM.value;
    const resultado = compra(valueP, valueD, valueM);
    const text = document.getElementById("text");
    text.innerText = "El precio del producto con el descuento es de $" + resultado;
}
