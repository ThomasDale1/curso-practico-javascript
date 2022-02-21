function calcularPromedio(lista){
    const sumarLista = lista.reduce(function(sumaAcumulada = 0, elemento){
        return sumaAcumulada + elemento;
    })
    const promedio = sumarLista / lista.length
    return promedio;
}

function par(numero){
    if(numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

function calcularMediana(elementos){
    const orden = elementos.sort(function (a, b) {
        return a - b;
      });
    const mitadLista = parseInt(orden.length / 2);
    if(par(orden.length)){
        const elemento1 = orden[mitadLista];
        const elemento2 = orden[mitadLista - 1];
        const promedioMediana = calcularPromedio([elemento1, elemento2]);
        mediana = promedioMediana;
        return mediana;
    }
    else{
        mediana = orden[mitadLista];
        return mediana;
    }
}