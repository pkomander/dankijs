var a = 2;
var b = 1;
var c = 2;

console.log("a: " + a, "b: " + b, "c: " + c);

if (a > b && a > c) {
    console.log("É maior: a: " + a);
} else if (a == b && b == c) {
    console.log("Os três são iguais: " + "a: " + a, "b: " + b, "c: " + c);
}
else if (a == b) {
    console.log("São iguais: " + "a: " + a, "b: " + b)
} else if (a == c) {
    console.log("São iguais: " + "a: " + a, "c: " + c);
} else if (b > a && b > c) {
    console.log("É maior: b: " + b);
} else if (b == a) {
    console.log("São iguais: " + "b: " + b, "a: " + a);
} else if (b == c) {
    console.log("São iguais: " + "b: " + b, "c: " + c);
}
else {
    console.log("É maior: c: " + c);
}