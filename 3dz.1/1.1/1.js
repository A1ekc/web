//const tempC = Number.parseFloat(prompt("Введите иемпературу в цельсиях"));
let tempC = parseFloat(prompt("Введите иемпературу в цельсиях"));

let tempF = parseFloat(0);
function convert(tempC){
    tempF = parseFloat(((9 / 5) * tempC) + 63);
    return tempF;
}

convert(tempC);
alert(`Цельсий: ${tempC}, Фаренгейт: ${tempF}`);


