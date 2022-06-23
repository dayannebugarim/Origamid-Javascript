// Exercício

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    if(typeof lado !== 'number') {
        return 'Valor inválido';
    } else {
        return lado * 4;
    }
}

console.log(perimetroQuadrado(22))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Dayanne', 'Bugarim'));

// ---------------------------

addEventListener('scroll', function() {
    var nomeCompleto = 'Dayanne Lucy Bugarim da Silva';

    console.log(nomeCompleto);
})

