// Funções No TypeScript
// Definir uma função
const sum = (x: number, y: number): number => {
    return x + y;
}
const value = sum(1, 2);

// Usando a troca de tipo
const sum__1 = (x: number, y: number): string => {
    return (x + y).toString(); // O .toString rá transformar o retorno em string
}
const value__1 = sum(1, 2);

// Usando a escolha de dois tipos (ou --> |)
const sum__2 = (x: number, y: number): string | number => {
    return (x + y).toString(); // O .toString rá transformar o retorno em string
}
const value__2 = sum(1, 2);

// Void --> Retorno TypeScript (NÃO RETORNA NADA!!)
const log = (message: string): void => { // Seu tipo vaivoid, ou seja, sem retorno
    console.log(message);  
}

// Retornr Lista 
const list__1 = (firstNameOfPerson: string, secoundNameOfPerson: string): string[]=> {
    return [firstNameOfPerson, secoundNameOfPerson];
};

list__1("Gabriel", "Fiorim Esteves");

// Interfaces com Funções:
interface MathFunction {
    // Toda função que irá receber essa interface tem que retornar o x como número, o y como número e o resultado tem que ser um número kkkkk
   (x: number, y: number): number; // --> Função dentro da interface
}

/* Criamos uma função com o nome total, onde nela tem-se a interface MathFunction criada, que recebe
os parâmetros x (com seu tipo number) e y (com seu tipo number) e retorna um number (número) */
const total: MathFunction = (x:number, y:number): number => {
    return x + y;
}

const resultTotal = total(3, 7);

const sub: MathFunction = (x: number, y:number): number => {
    return x -y;
}

const anotherResultTotal = sub(25, 12);

