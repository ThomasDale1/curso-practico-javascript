function calcularPromedio(lista){
    const sumarLista = lista.reduce(function(sumaAcumulada = 0, elemento){
        return sumaAcumulada + elemento;
    })
    const promedio = sumarLista / lista.length
    return promedio;
}