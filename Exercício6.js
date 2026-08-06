//Exercício 6 - Separando Faixa Etária
const idades = [12, 18, 25, 40, 16, 22];
for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log(idades[i] + " Menor de idade! ");
    } else {
        console.log(idades[i] + " Maior de idade! ")
    }
}
