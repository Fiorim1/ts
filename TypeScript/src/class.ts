// Classes em TypeScript
class Person {
    id: number;
    name: string;
    age: number;

    // Tipo o __self__ do Python
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // Tipar métodos
    sayMyName(): string {
        return this.name
    }
}

const person__1 = new Person(1, "gabriel", 19); // O new serve para atualiazar, como se fosse adicionar novos valores dentro da class

// Interfaces com Class --> Implementar uma interface numa class
interface IPerson {
    // Atributos
    id__1: number;
    name__1: string;
    age__1: number;
    // Métodos
    sayMyName(): string;
}

// Implementar --> implements
class Person__2 implements IPerson {
    // Atributos
    id__1: number;
    name__1: string;
    age__1: number;

    constructor(id__1: number, name__1: string, age__1: number) {
        this.id__1 = id__1;
        this.name__1 = name__1;
        this.age__1 = age__1;
    };

    // Puxar a função sayMyName()
    sayMyName(): string {
        return "My name is ${this.name__1} "; // Para puxar de uma class, usamos $ (cifrão) e chaves e dentro dachves o this(igual self do python)e  o nome da variável
    }


}

// Usando readonly no class
interface IPerson__1 {
    id__2: number;
    name__2: string;
    age__2: number;
    sayMyName__1(): string;
}
class Person__3 implements IPerson__1 {
    readonly id__2: number;
    /* protected */ name__2: string; // --> Faz com que a variável só consiga ser acessada dentro da sua classe ou sub-classe
    /* private */ age__2: number; // --> Só pode ser acessada na sua classe

    constructor(id__2: number, name__2: string, age__2: number) {
        this.id__2 = id__2;
        this.name__2 = name__2;
        this.age__2 = age__2;
    };

    sayMyName__1(): string {
        return "My name is ${this.name__2}";
    }

}

const person__4 = new Person__3(1, "Felipe", 21);

// Sub-Classes
class Employee extends Person__3 {
    constructor(id__2: number, name__2: string, age__2: number ) {
        super(id__2, name__2, age__2);
    }
    whoAmi() {
        return this.age__2; // --> Não irá ar de acessar pois está privado
    }
    acessName() {
        return this.name__2; // --> Vai dar de acessar pois está apenas protected
    }
}

// Forma Melhor De Declarar Classes
// Mesma Coisa Só Que Mais Profissional
class PersonRefact {
    constructor(readonly id__4: number, protected name__4: string, age__4: number) {}
}