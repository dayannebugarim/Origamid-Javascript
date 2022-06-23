var possuiGraduacao = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
} else {
    console.log('É falso');
}

// Falsy -> retorna falso
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``
// todo o resto é truthy

// Operador lógico de negação !
// !! verifica se é true ou false

// == -> compara se dois valores são iguais, mesmo sendo de tipos diferentes ('10' == 10 -> true)
// === -> verifica se dois valores são exatamente iguais, de mesmo tipo ('10' === 10 -> false)

// Operador lógico && (e)
// Operador lógico || (ou)

// Switch
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos.');
}