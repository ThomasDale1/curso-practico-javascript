function Notas(nota1, credito1, nota2, credito2, nota3, credito3, nota4, credito4, nota5, credito5){
    return ((nota1 * credito1)+(nota2 * credito2)+(nota3 * credito3)+(nota4 * credito4)+(nota5 * credito5))/100;
}

function calcularNotas(){
    const input1 = document.getElementById("input-nota1");
    const value1 = input1.value;
    const dato1 = document.getElementById("input-credito1");
    const valor1 = dato1.value;
    const input2 = document.getElementById("input-nota2");
    const value2 = input2.value;
    const dato2 = document.getElementById("input-credito2");
    const valor2 = dato2.value;
    const input3 = document.getElementById("input-nota3");
    const value3 = input3.value;
    const dato3 = document.getElementById("input-credito3");
    const valor3 = dato3.value;
    const input4 = document.getElementById("input-nota4");
    const value4 = input4.value;
    const dato4 = document.getElementById("input-credito4");
    const valor4 = dato4.value;
    const input5 = document.getElementById("input-nota5");
    const value5 = input5.value;
    const dato5 = document.getElementById("input-credito5");
    const valor5 = dato5.value;
    const notaFinal = Notas(value1, valor1, value2, valor2, value3, valor3, value4, valor4, value5, valor5);
    const text = document.getElementById("text-nota");
    text.innerText = "Tu nota final es de " + notaFinal;
}