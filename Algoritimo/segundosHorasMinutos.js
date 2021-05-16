var segundos = 6000;

var minutos = segundos / 60;
console.log(minutos);
var hora = minutos / 60;
console.log(hora);
var resultadoHoraMinuto = hora.toFixed(2).replace(".", ":");
console.log("Conversão de Segundos para hora e minuto: " + resultadoHoraMinuto);