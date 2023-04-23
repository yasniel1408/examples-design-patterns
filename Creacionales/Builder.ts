class Coche {
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

class CocheBuilder {
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

  build(): Coche {
    return new Coche(this.marca, this.modelo, this.color, this.potencia);
  }
}

const coche = new CocheBuilder()
  .setMarca("Ford")
  .setModelo("Mustang")
  .setColor("Rojo")
  .setPotencia(500)
  .build();

console.log(coche);
