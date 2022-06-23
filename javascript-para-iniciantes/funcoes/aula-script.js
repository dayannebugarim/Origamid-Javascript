function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();

function imc(peso, altura) {
    var imc = peso / (altura * altura);

    return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Você gosta do céu';
    } else if(cor === 'verde') {
        return 'Você gosta de mato';
    } else {
        return 'Você não gosta de nada';
    }
}

console.log(corFavorita());

addEventListener('click', function() {
    console.log('Oi')
});

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}