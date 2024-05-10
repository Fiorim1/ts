// Genéricos 
// --> Temos uma forma de passar tipos como parâmetros
const returnValue = (value: any) => value;
const message = returnValue("Hello World");
const count = returnValue(5);

// Receber um Generic
const returnValue__1 = <T>(value__1: T): T => value__1;
const message__1 = returnValue__1<string>("Hello World"); // O T serve para coringa de tipo
const count__1 = returnValue__1<number>(21); // O T serve para coringa de tipo

// Usar em funções normais 
function getFirtsValueFromArray<Type>(array: Type[]) {
    return array[0];
}
const valueStringArray = getFirtsValueFromArray<string>(["1", "2"]);
const numberStringArrya = getFirtsValueFromArray<number>([1, 2]);

// Primises
// --> Usar generic para retornar uma promise
const returnPromise = async (): Promise<number> => { // --> Ter que ser igual a async para retornar uma promise
    return 5;
};

// Usar Generics com classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T,y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
// Declarar classe
const myGenericNumber =  new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y;
})