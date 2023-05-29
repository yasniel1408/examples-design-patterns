// Componente
interface Componente {
    agregar(componente: Componente): void;
    eliminar(componente: Componente): void;
    obtenerHijos(): Componente[];
    mostrarNombre(): void;
}

// Hoja
class Hoja implements Componente {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregar(componente: Componente): void {
        console.log("No se puede agregar un componente a una hoja.");
    }

    eliminar(componente: Componente): void {
        console.log("No se puede eliminar un componente de una hoja.");
    }

    obtenerHijos(): Componente[] {
        console.log("No se pueden obtener los hijos de una hoja.");
        return [];
    }

    mostrarNombre(): void {
        console.log(`Hoja: ${this.nombre}`);
    }
}

// Compuesto
class Compuesto implements Componente {
    private nombre: string;
    private hijos: Componente[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregar(componente: Componente): void {
        this.hijos.push(componente);
    }

    eliminar(componente: Componente): void {
        const indice = this.hijos.indexOf(componente);
        if (indice !== -1) {
            this.hijos.splice(indice, 1);
        }
    }

    obtenerHijos(): Componente[] {
        return this.hijos;
    }

    mostrarNombre(): void {
        console.log(`Compuesto: ${this.nombre}`);
    }
}

// Uso del patrón Composite
const raiz = new Compuesto("Raíz");

const hoja1 = new Hoja("Hoja 1");
const hoja2 = new Hoja("Hoja 2");

const compuesto1 = new Compuesto("Compuesto 1");
const compuesto2 = new Compuesto("Compuesto 2");

compuesto1.agregar(hoja1);
compuesto2.agregar(hoja2);
compuesto2.agregar(compuesto1);

raiz.agregar(compuesto2);

// Mostrar la estructura jerárquica
function mostrarEstructura(componente: Componente, nivel: number = 0) {
    const espacios = " ".repeat(nivel * 2);
    componente.mostrarNombre();
    componente.obtenerHijos().forEach((hijo) => {
        console.log(`${espacios}-`);
        mostrarEstructura(hijo, nivel + 1);
    });
}

mostrarEstructura(raiz);
