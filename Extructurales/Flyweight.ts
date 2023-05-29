// Flyweight
interface Figura {
    dibujar(color: string): void;
}

// Flyweight concreto
class Circulo implements Figura {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    dibujar(color: string): void {
        console.log(`Dibujando un círculo de radio ${this.radio} y color ${color}`);
    }
}

// Fábrica de Flyweights
class FabricaFiguras {
    private figuras: { [color: string]: Figura } = {};

    obtenerFigura(color: string): Figura {
        if (!this.figuras[color]) {
            this.figuras[color] = new Circulo(10);
        }
        return this.figuras[color];
    }

    obtenerCantidadFiguras(): number {
        return Object.keys(this.figuras).length;
    }
}

// Uso del patrón Flyweight
const fabrica = new FabricaFiguras();
const figura1 = fabrica.obtenerFigura("rojo");
figura1.dibujar("rojo");

const figura2 = fabrica.obtenerFigura("azul");
figura2.dibujar("azul");

const figura3 = fabrica.obtenerFigura("rojo");
figura3.dibujar("rojo");

console.log(`Cantidad de figuras creadas: ${fabrica.obtenerCantidadFiguras()}`);
