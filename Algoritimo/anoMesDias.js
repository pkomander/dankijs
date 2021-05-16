var d = new Date;
anoAtual = d.getFullYear();
mesAtual = d.getMonth() + 1;
diaAtual = d.getDate();

console.log(diaAtual, mesAtual, anoAtual);

var qtdDias = 0;

for (var i = 1997; i < anoAtual; i++) {
    qtdDias += 365;
}

console.log(qtdDias);