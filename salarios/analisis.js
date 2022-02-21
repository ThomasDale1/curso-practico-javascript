//Helpers
function par(length){
    if (length % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

function calcularPromedio(lista){
    const sumarLista = lista.reduce(function(valor = 0, nuevo){
        return valor + nuevo;
    });
    const promedio = sumarLista / lista.length;
    return promedio;
}

//SalarySV
const salarySV = ElSalvador.map(function (persona){
    return persona.salary;
});

const salarySorted = salarySV.sort(function (a, b) {
    return a - b;
});

//Mediana
function medianaSalary(array){
    const mitad = parseInt(array.length / 2);
    if (par(array.length)){
        const valor1 = array[mitad - 1];
        const valor2 = array[mitad];
        const mediana = calcularPromedio([valor1, valor2]);
        return mediana
    }
    else{
        const mediana = array[mitad];
        return mediana;
    }
}
const medianaSalarySV = medianaSalary(salarySorted);

//Top 10%
const spliceStart = salarySorted.length * 0.9;
const spliceCount = salarySorted.length - spliceStart;
const salaryTop = salarySorted.splice(spliceStart, spliceCount);

const medianaTop10SalarySV = medianaSalary(salaryTop);

console.log(medianaSalarySV, medianaTop10SalarySV);