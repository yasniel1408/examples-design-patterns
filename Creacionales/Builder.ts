class Car {
  marca: string;
  modelo: string;
  color: string;
  potencia: number;
  constructor(marca: string, modelo: string, color: string, potencia: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.potencia = potencia;
  }
}

class CarBuilder {
  marca: string;
  modelo: string;
  color: string;
  potencia: number;

  setMarca(marca: string) {
    this.marca = marca;
    return this;
  }

  setModelo(modelo: string) {
    this.modelo = modelo;
    return this;
  }

  setColor(color: string) {
    this.color = color;
    return this;
  }

  setPotencia(potencia: number) {
    this.potencia = potencia;
    return this;
  }

  build(): Car {
    return new Car(this.marca, this.modelo, this.color, this.potencia);
  }
}

const coche = new CarBuilder()
  .setMarca("Ford")
  .setModelo("Mustang")
  .setColor("Rojo")
  .setPotencia(500)
  .build();

console.log(coche);


// ----------------------------------------------------------------------- OTHER EXAMPLE ----------------------------------------------------------

// Producto
class Coche {
  private marca: string;
  private modelo: string;
  private color: string;
  private motor: string;

  constructor() {
    this.marca = "";
    this.modelo = "";
    this.color = "";
    this.motor = "";
  }

  setMarca(marca: string): void {
    this.marca = marca;
  }

  setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  setColor(color: string): void {
    this.color = color;
  }

  setMotor(motor: string): void {
    this.motor = motor;
  }

  mostrar(): void {
    console.log(`Coche: ${this.marca} ${this.modelo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Motor: ${this.motor}`);
  }
}

// Builder abstracto
abstract class CocheBuilder {
  protected coche: Coche;

  constructor() {
    this.coche = new Coche();
  }

  abstract construirMarca(): void;
  abstract construirModelo(): void;
  abstract construirColor(): void;
  abstract construirMotor(): void;

  obtenerCoche(): Coche {
    return this.coche;
  }
}

// Builder concreto 1
class CocheEconomicoBuilder extends CocheBuilder {
  construirMarca(): void {
    this.coche.setMarca("Marca Económica");
  }

  construirModelo(): void {
    this.coche.setModelo("Modelo Económico");
  }

  construirColor(): void {
    this.coche.setColor("Blanco");
  }

  construirMotor(): void {
    this.coche.setMotor("Motor de baja potencia");
  }
}

// Builder concreto 2
class CocheDeportivoBuilder extends CocheBuilder {
  construirMarca(): void {
    this.coche.setMarca("Marca Deportiva");
  }

  construirModelo(): void {
    this.coche.setModelo("Modelo Deportivo");
  }

  construirColor(): void {
    this.coche.setColor("Rojo");
  }

  construirMotor(): void {
    this.coche.setMotor("Motor de alta potencia");
  }
}

// Director
class Concesionario {
  private builder: CocheBuilder;

  setBuilder(builder: CocheBuilder): void {
    this.builder = builder;
  }

  construirCoche(): void {
    this.builder.construirMarca();
    this.builder.construirModelo();
    this.builder.construirColor();
    this.builder.construirMotor();
  }

  obtenerCoche(): Coche {
    return this.builder.obtenerCoche();
  }
}

// Uso del patrón Builder
const concesionario = new Concesionario();

const economicoBuilder = new CocheEconomicoBuilder();
concesionario.setBuilder(economicoBuilder);
concesionario.construirCoche();
const cocheEconomico = concesionario.obtenerCoche();
console.log("Coche Económico:");
cocheEconomico.mostrar();

const deportivoBuilder = new CocheDeportivoBuilder();
concesionario.setBuilder(deportivoBuilder);
concesionario.construirCoche();
const cocheDeportivo = concesionario.obtenerCoche();
console.log("Coche Deportivo:");
cocheDeportivo.mostrar();
