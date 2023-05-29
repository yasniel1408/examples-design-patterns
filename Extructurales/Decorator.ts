// Componente
interface Cafe {
    costo(): number;
    descripcion(): string;
}

// Componente concreto
class CafeSimple implements Cafe {
    costo(): number {
        return 10;
    }

    descripcion(): string {
        return "Café simple";
    }
}

// Decorador abstracto
abstract class DecoradorCafe implements Cafe {
    protected cafe: Cafe;

    constructor(cafe: Cafe) {
        this.cafe = cafe;
    }

    costo(): number {
        return this.cafe.costo();
    }

    descripcion(): string {
        return this.cafe.descripcion();
    }
}

// Decorador concreto 1
class DecoradorLeche extends DecoradorCafe {
    costo(): number {
        return this.cafe.costo() + 5;
    }

    descripcion(): string {
        return this.cafe.descripcion() + ", con leche";
    }
}

// Decorador concreto 2
class DecoradorCaramelo extends DecoradorCafe {
    costo(): number {
        return this.cafe.costo() + 3;
    }

    descripcion(): string {
        return this.cafe.descripcion() + ", con caramelo";
    }
}

// Uso del patrón Decorator
const cafeSimple: Cafe = new CafeSimple();
console.log(`Café simple - Costo: $${cafeSimple.costo()}, Descripción: ${cafeSimple.descripcion()}`);

const cafeConLeche: Cafe = new DecoradorLeche(cafeSimple);
console.log(`Café con leche - Costo: $${cafeConLeche.costo()}, Descripción: ${cafeConLeche.descripcion()}`);

const cafeConLecheYCaramelo: Cafe = new DecoradorCaramelo(cafeConLeche);
console.log(`Café con leche y caramelo - Costo: $${cafeConLecheYCaramelo.costo()}, Descripción: ${cafeConLecheYCaramelo.descripcion()}`);
