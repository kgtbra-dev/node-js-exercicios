//Exercício 5 - Encontrar Maior Estoque
const estoque = [200, 450, 100, 900, 300];
let amior = estoque[0];
for (let i = 1; i < estoque.length; i++) {
    if (estoque[i] > amior) {
        amior = estoque[i];
    }
}
console.log(' O maior número é : ' + amior);
