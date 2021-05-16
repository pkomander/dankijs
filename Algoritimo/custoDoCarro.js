var valorCarro = 40.000;
var distribuidor = 28;
var imposto = 45;
console.log("valor do carro: " + valorCarro.toFixed(3));

// var porcentagemDistribuidor = valorCarro / distribuidor;
// console.log(porcentagemDistribuidor);

var porcentagemDistribuidor = (distribuidor * valorCarro) / 100;
var resultDistribuidor = porcentagemDistribuidor.toFixed(3);
console.log("porcentagem do distribuidor: R$ " + resultDistribuidor);

var porcentagemImposto = (imposto * valorCarro) / 100;
var resultadoImposto = porcentagemImposto.toFixed(3);
console.log("porcentagem do imposto: R$ " + resultadoImposto);

var resultadoValorCarro = (valorCarro + porcentagemDistribuidor + porcentagemImposto).toFixed(3);
console.log("o valor final do carro é: R$ " + resultadoValorCarro);