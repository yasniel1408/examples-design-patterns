// Clase existente que queremos adaptar
class LegacyPrinter {
    public print(text: string): void {
        console.log(`Imprimiendo: ${text}`);
    }
}

class PrinterA implements Printer{
    public printMessage(text: string): void {
        console.log(`Imprimiendo: ${text}`);
    }
}

class PrinterB implements Printer{
    public printMessage(text: string): void {
        console.log(`Imprimiendo: ${text}`);
    }
}

// Interfaz del nuevo sistema de impresión
interface Printer {
    printMessage(message: string): void;
}

// Adaptador que permite utilizar el nuevo sistema de impresión con la clase existente
class PrinterAdapter implements Printer {
    private legacyPrinter: LegacyPrinter;

    constructor(legacyPrinter: LegacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }

    public printMessage(message: string): void {
        this.legacyPrinter.print(message);
    }
}

// Uso del patrón Adapter

// Creamos una instancia de la clase existente
const legacyPrinter = new LegacyPrinter();

// Creamos una instancia del adaptador, pasando la instancia de la clase existente
const printerAdapter = new PrinterAdapter(legacyPrinter);

// Utilizamos el nuevo sistema de impresión a través del adaptador
printerAdapter.printMessage("Hola, mundo!");
