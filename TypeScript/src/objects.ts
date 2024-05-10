// Objetos Em TypeScript

// 1° Conceito: Type
// Type --> É basicamente um objeto onde podemos definir quais propriedades esse objeto vai ter e os tipos dessas propriedades
type User = {
    firstName: string,
    age: number,
    email: string,
    password: string
};
// Agora criar um objeto desse usuário
const user: User = { // --> Criar uma variável e adicionar o type dentro dela, assim criando um objeto
    firstName: "Gabriel",
    age: 19,
    email: "gabrielfiorimestevessocial@gmail.com",
    password: "123456"
}
// Agora vamos criar um objeto com propriedades OPCIONAIS 
type User__1 = {
    firstName: string,
    age: number,
    email: string,
    password?: string, // O ? serve para dizer que é opcional adicioná-lo
    orders?: string[]
};

const user__1: User__1 = {
    firstName: "Gabriel",
    age: 19,
    email: "gabrielfiorimestevessocial@gmail.com",
    orders: ["1", "2"]
}

// Objetos que serão listas do user__1
type Order = {
    productId: string;
    price: number;
};

type User__2 = {
    firstName: string,
    age: number,
    email: string,
    password?: string, 
    orders?: Order[]
};

const user__2: User__2 = {
    firstName: "Gabriel",
    age: 19,
    email: "gabrielfiorimestevessocial@gmail.com",
    orders: [{productId: "1", price: 200}], // Fazer que cada elemento d alista seja uma order do type;
                                           // Usar types em conjuntos
    password: "1244444"
}

// IMPORTANTE:
user__2.password 
const log__1 = (messagem?: string) => {}
log__1(user__2.password); // --> Quando temos propriedades opcionais, são diferentes das fixas, pois seus tipos mudam

type User__3 = {
    firstName: string,
    age: number,
    email: string,
    password?: string, 
    orders: Order[]
};

const user__3: User__3 = {
    firstName: "Gabriel",
    age: 19,
    email: "gabrielfiorimestevessocial@gmail.com",
    orders: [{productId: "1", price: 200}], // Fazer que cada elemento d alista seja uma order do type;
                                           // Usar types em conjuntos
    password: "1244444"
}

// IMPORTANTE:
user__3.password 
const log__2 = (messagem: string) => {}
log__2(user__2.password!); // --> A ! (esclamação) da um bypass, ele tira o undefined

// Unions 
type Author = {
    books: string[]
};

const author: Author & User = {
    age: 2,
    books: ["1"],
    firstName: "Gabriel",
    email: "gabrielfiorimestevessocial@gmail.com",
    password: "12234344",
};

// Interfaces
// Criar uma interface:
interface UserInterface {
    readonly firstName: string, // readonly --> Apenas leitura não pode alterar nem nada!
    email: string,
};
const emailUser: UserInterface = {
    firstName: "Gabriel",
    email: "gabrielfiorimestevessocial@gmail.com",
};

interface AuthorInterface {
    books: string[],
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "autor@gmail.com",
    firstName: "Autor",
    books: ["1"],
}

// Assinalar uma intersection à um type:
type Grade = number | string;
const grade: Grade = 1;

// Definir que uma propriedade do usuário irá ser uma função
type userWithFunction = {
    register(): string, // Uma função que irá retornar uma string 
}

const userFunction: userWithFunction = { // Funções dentro de types :)
    register() {
        return "817183981"
    }
}