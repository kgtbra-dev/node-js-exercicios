//Exercício 2 - Maior Número
let num = [12, 67, 34, 89, 21];;

let amior = num[0];
for (let i = 1; i < num.length; i++) {
    if (num[i] > amior) {
        amior = num[i];
    }
}
    console.log(" O maior número é : " + amior);
