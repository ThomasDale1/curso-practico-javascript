function anual(saldo, interes, tiempo){
    const resultado = saldo * ((1+(interes/100)/1)**tiempo);
    return Math.round(resultado * 100)/100;
}
function semestral(saldo, interes, tiempo){
    const resultado = saldo * ((1+(interes/100)/2)**(2 * tiempo));
    return Math.round(resultado * 100)/100;
}
function trimestral(saldo, interes, tiempo){
    const resultado = saldo * ((1+(interes/100)/4)**(4 * tiempo));
    return Math.round(resultado * 100)/100;
}
function bimestral(saldo, interes, tiempo){
    const resultado = saldo * ((1+(interes/100)/6)**(6 * tiempo));
    return Math.round(resultado * 100)/100;
}
function mensual(saldo, interes, tiempo){
    const resultado = saldo * ((1+(interes/100)/12)**(12 * tiempo));
    return Math.round(resultado * 100)/100;
}


function calcularAnual(){
    const s = document.getElementById("input-initial");
    const svalue = s.value;
    const t = document.getElementById("input-time");
    const tvalue = t.value;
    const i = document.getElementById("input-interest");
    const ivalue = i.value;
    const final = anual(svalue, ivalue, tvalue);
    const text = document.getElementById("text");
    text.innerText = "En " + tvalue + " años, tendrás " + final;
}
function calcularSemestral(){
    const s = document.getElementById("input-initial");
    const svalue = s.value;
    const t = document.getElementById("input-time");
    const tvalue = t.value;
    const i = document.getElementById("input-interest");
    const ivalue = i.value;
    const final = semestral(svalue, ivalue, tvalue);
    const text = document.getElementById("text");
    text.innerText = "En " + tvalue + " años, tendrás " + final;
}
function calcularTrimestral(){
    const s = document.getElementById("input-initial");
    const svalue = s.value;
    const t = document.getElementById("input-time");
    const tvalue = t.value;
    const i = document.getElementById("input-interest");
    const ivalue = i.value;
    const final = trimestral(svalue, ivalue, tvalue);
    const text = document.getElementById("text");
    text.innerText = "En " + tvalue + " años, tendrás " + final;
}
function calcularBimestral(){
    const s = document.getElementById("input-initial");
    const svalue = s.value;
    const t = document.getElementById("input-time");
    const tvalue = t.value;
    const i = document.getElementById("input-interest");
    const ivalue = i.value;
    const final = bimestral(svalue, ivalue, tvalue);
    const text = document.getElementById("text");
    text.innerText = "En " + tvalue + " años, tendrás " + final;
}
function calcularMensual(){
    const s = document.getElementById("input-initial");
    const svalue = s.value;
    const t = document.getElementById("input-time");
    const tvalue = t.value;
    const i = document.getElementById("input-interest");
    const ivalue = i.value;
    const final = mensual(svalue, ivalue, tvalue);
    const text = document.getElementById("text");
    text.innerText = "En " + tvalue + " años, tendrás " + final;
}