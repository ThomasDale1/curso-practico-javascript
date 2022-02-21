//Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Triángulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

//Altura
function alturaTriangulo(lado1, lado2, base){
    if(lado1 == lado2){
        const a = base/2;
        const c = lado1;
        const b = (c * c) - (a * a);
        return Math.sqrt(b);
    }
    else{
        return "Los valores del lado A y lado B tiene que ser los mismos. Prueba de nuevo!"
    }
}

//Círculo
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return radio * radio * PI;
}

//Integrar com HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
//Triángulo
function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("input-trianguloA");
    const valueA = parseInt(inputA.value);
    const inputB = document.getElementById("input-trianguloB");
    const valueB = parseInt(inputB.value);
    const inputBase = document.getElementById("input-trianguloBase");
    const valueBase = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("input-trianguloAltura");
    const valueAltura = parseInt(inputAltura.value);
    const inputBase = document.getElementById("input-trianguloBase");
    const valueBase = parseInt(inputBase.value);
    const area = areaTriangulo(valueBase, valueAltura, valueBase);
    alert(area);
}
//Altura
function calcularAlturaTriangulo(){
    const inputA = document.getElementById("input-heightA")
    const valueA = inputA.value;
    const inputB = document.getElementById("input-heightB")
    const valueB = inputB.value;
    const inputBase = document.getElementById("input-heightBase")
    const valueBase = inputBase.value;
    const altura = alturaTriangulo(valueA, valueB, valueBase);
    alert(altura);
}
//Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("input-circulo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("input-circulo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}