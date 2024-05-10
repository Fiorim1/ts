// Comandos Básicos
let age: number = 5;
const namee: string = "Felipe";
const isValid: boolean = true;

// Esse é any é qualquer coisas
let idk: any = 5
idk = "12";
idk = true;

// Lista:
const ids: number[] = [1, 2, 3, 4, 5]; // Aqui estou informando que é uma lista somente de números
const booleans: boolean[] = [true, false, true, false]; // Aqui estou informando que é uma lista somente de valores booleanos
const names: string[] = ["Felipe", "Gabriel", "Kleyton"] // Aqui estou informando que é uma lista somente de valores strings

// Tuplas: --> Tipo de valor numa determinada ordem
const person: [number, string] = [1, "Gabriel"]; // Uma Tupla tem o mesmo sinal ([]) de uma lista, onde a tupla irá conter mais informações;
                                                 // É obrigado a inserir na ordem que os tipos foram inseridos
// Lista De Tuplas
const people: [number, string][] = [ // Aqui nós adicionamos os tipos juntos com um elementos de tuplas/listas;
    [1, "João"],                     // Onde você irá colocar dentro de uma lista, várias tuplas
    [2, "Maria"],
    [3, "Gabriel"]
];

// Intersections --> Situação em que a gente quer que uma variável possua um tipo só ou outro tipo
const productId: string | number = 1; // Utilizamos o ou (|) onde vamos poder escolher dois tipos

// Enum --> Utilizado em situações que temos por exemplo um valor que sempre vai ser atribuido a outro valor
enum Direction {  // --> Através da tag/name em sí, podemos saber qual é o valor
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
    Right = "Direita"
};
const direction = Direction.Left; // --> Utilizado quando no nosso banco de dados, temos valor que tem que ser um dois;
                                // --> Aumentar a legibildade do código
console.log(direction);

// Type Assertions --> É basicamente quando queremos mudar o tipo de uma variável
const productName: any = "Boné";
// Atribuir o productName à outra variável
let itemId = productName as string;  // Estou informando que a variável itemId terá o valor da variável productName mas com o seu tipo alterado para string
// Outra forma, da maneira mais "chique"
let item = <string>productName; // Entre <> fica o tipo e depois o valor da variável que queremos atribuir


