class Prototype {
    public primitive: number;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

// Uso del patrón Prototype

const prototype = new Prototype();
prototype.primitive = 123;
prototype.component = new Date();
prototype.circularReference = new ComponentWithBackReference(prototype);

const clone = prototype.clone();


// ----------------------------------------------------------------------- OTHER EXAMPLE ----------------------------------------------------------
class Vehicle {
    constructor(public brand: string, public model: string) {}

    public clone(): Vehicle {
        return new Vehicle(this.brand, this.model);
    }
}

// Uso del patrón Prototype

const originalVehicle = new Vehicle("Toyota", "Corolla");
const clonedVehicle = originalVehicle.clone();

console.log(originalVehicle); // Imprime: Vehicle { brand: 'Toyota', model: 'Corolla' }
console.log(clonedVehicle); // Imprime: Vehicle { brand: 'Toyota', model: 'Corolla' }


// ----------------------------------------------------------------------- OTHER EXAMPLE ----------------------------------------------------------

// Prototipo
abstract class Animal {
    abstract clone(): Animal;
    abstract hacerSonido(): void;
}

// Prototipo concreto 1
class Perro extends Animal {
    clone(): Animal {
        return new Perro();
    }

    hacerSonido(): void {
        console.log("El perro hace: ¡Guau guau!");
    }
}

// Prototipo concreto 2
class Gato extends Animal {
    clone(): Animal {
        return new Gato();
    }

    hacerSonido(): void {
        console.log("El gato hace: ¡Miau miau!");
    }
}

// Cliente
class Cliente {
    private animal: Animal;

    constructor(animal: Animal) {
        this.animal = animal;
    }

    setAnimal(animal: Animal): void {
        this.animal = animal;
    }

    clonarAnimal(): Animal {
        return this.animal.clone();
    }

    hacerSonidoAnimal(): void {
        this.animal.hacerSonido();
    }
}

// Uso del patrón Prototype
const perro = new Perro();
const gato = new Gato();

const cliente = new Cliente(perro);
cliente.hacerSonidoAnimal();

const clonPerro = cliente.clonarAnimal();
cliente.setAnimal(gato);
cliente.hacerSonidoAnimal();

const clonGato = cliente.clonarAnimal();

console.log("Clon del perro:");
clonPerro.hacerSonido();

console.log("Clon del gato:");
clonGato.hacerSonido();
