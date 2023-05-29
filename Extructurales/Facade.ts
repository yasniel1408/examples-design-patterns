// Subsistema 1
class Motor {
    encender(): void {
        console.log("Motor encendido");
    }

    apagar(): void {
        console.log("Motor apagado");
    }
}

// Subsistema 2
class Luces {
    encenderLuces(): void {
        console.log("Luces encendidas");
    }

    apagarLuces(): void {
        console.log("Luces apagadas");
    }
}

// Subsistema 3
class Radio {
    encenderRadio(): void {
        console.log("Radio encendida");
    }

    apagarRadio(): void {
        console.log("Radio apagada");
    }
}

// Fachada
class CocheFacade {
    private motor: Motor;
    private luces: Luces;
    private radio: Radio;

    constructor() {
        this.motor = new Motor();
        this.luces = new Luces();
        this.radio = new Radio();
    }

    encenderCoche(): void {
        console.log("Encendiendo el coche...");
        this.motor.encender();
        this.luces.encenderLuces();
        this.radio.encenderRadio();
        console.log("El coche está listo para usar");
    }

    apagarCoche(): void {
        console.log("Apagando el coche...");
        this.motor.apagar();
        this.luces.apagarLuces();
        this.radio.apagarRadio();
        console.log("El coche está apagado");
    }
}

// Uso del patrón Facade
const coche = new CocheFacade();
coche.encenderCoche();
console.log("------------------");
coche.apagarCoche();
