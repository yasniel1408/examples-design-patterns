// Abstracción
abstract class Forma {
    protected dibujador: Dibujador;

    constructor(dibujador: Dibujador) {
        this.dibujador = dibujador;
    }

    abstract dibujar(): void;
}

// Implementación
interface Dibujador {
    dibujarCirculo(): void;
    dibujarCuadrado(): void;
}

// Implementación concreta A
class DibujadorRojo implements Dibujador {
    dibujarCirculo(): void {
        console.log("Dibujando un círculo en rojo");
    }

    dibujarCuadrado(): void {
        console.log("Dibujando un cuadrado en rojo");
    }
}

// Implementación concreta B
class DibujadorAzul implements Dibujador {
    dibujarCirculo(): void {
        console.log("Dibujando un círculo en azul");
    }

    dibujarCuadrado(): void {
        console.log("Dibujando un cuadrado en azul");
    }
}

// Abstracción refinada
class Circulo extends Forma {
    dibujar(): void {
        console.log("Dibujando un círculo:");
        this.dibujador.dibujarCirculo();
    }
}

// Abstracción refinada
class Cuadrado extends Forma {
    dibujar(): void {
        console.log("Dibujando un cuadrado:");
        this.dibujador.dibujarCuadrado();
    }
}

// Uso del patrón Bridge
const dibujadorRojo = new DibujadorRojo();
const dibujadorAzul = new DibujadorAzul();

const circuloRojo = new Circulo(dibujadorRojo);
const cuadradoAzul = new Cuadrado(dibujadorAzul);

circuloRojo.dibujar();
cuadradoAzul.dibujar();
