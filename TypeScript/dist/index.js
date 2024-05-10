"use strict";
// Comandos Básicos
let age = 5;
const namee = "Felipe";
const isValid = true;
// Esse é any é qualquer coisas
let idk = 5;
idk = "12";
idk = true;
// Lista:
const ids = [1, 2, 3, 4, 5]; // Aqui estou informando que é uma lista somente de números
const booleans = [true, false, true, false]; // Aqui estou informando que é uma lista somente de valores booleanos
const names = ["Felipe", "Gabriel", "Kleyton"]; // Aqui estou informando que é uma lista somente de valores strings
// Tuplas: --> Tipo de valor numa determinada ordem
const person = [1, "Gabriel"]; // Uma Tupla tem o mesmo sinal ([]) de uma lista, onde a tupla irá conter mais informações;
// É obrigado a inserir na ordem que os tipos foram inseridos
// Lista De Tuplas
const people = [
    [1, "João"], // Onde você irá colocar dentro de uma lista, várias tuplas
    [2, "Maria"],
    [3, "Gabriel"]
];
// Intersections --> Situação em que a gente quer que uma variável possua um tipo só ou outro tipo
const productId = 1; // Utilizamos o ou (|) onde vamos poder escolher dois tipos
// Enum --> Utilizado em situações que temos por exemplo um valor que sempre vai ser atribuido a outro valor
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
;
const direction = Direction.Up; // --> Utilizado quando no nosso banco de dados, temos valor que tem que ser um dois
console.log(direction);
