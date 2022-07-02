var pessoa = {
    nome: 'Dayanne',
    idade: 21
}

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado
    }, //this referencia o próprio objeto (quadrado)
    cinco() {
        return 5;
    }
}

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue'

var bg = menu.backgroundColor;
console.log(bg);