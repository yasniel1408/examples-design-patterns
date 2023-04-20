interface Computer {
  motherboard: string;
  cpu: string;
  ram: string;
  storage: string;
  display: string;
  turnOn(): void;
}

class Laptop implements Computer {
  motherboard = "Asus";
  cpu = "Intel Core i7";
  ram = "16GB";
  storage = "512GB SSD";
  display = "15.6-inch Full HD";

  turnOn() {
    console.log("La laptop está encendida");
  }
}

class Desktop implements Computer {
  motherboard = "Gigabyte";
  cpu = "AMD Ryzen 9";
  ram = "32GB";
  storage = "1TB NVMe SSD";
  display = "27-inch 4K UHD";

  turnOn() {
    console.log("La desktop está encendida");
  }
}

class ComputerFactory {
  createComputer(type: string): Computer {
    switch (type) {
      case "laptop":
        return new Laptop();
      case "desktop":
        return new Desktop();
      default:
        throw new Error(`El tipo de computadora ${type} no está disponible`);
    }
  }
}

// Usamos el ComputerFactory para crear diferentes tipos de computadoras
const computerFactory = new ComputerFactory();

const miLaptop = computerFactory.createComputer("laptop");
console.log(miLaptop); // Output: Laptop { motherboard: "Asus", cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD", display: "15.6-inch Full HD" }
miLaptop.turnOn(); // Output: La laptop está encendida

const miDesktop = computerFactory.createComputer("desktop");
console.log(miDesktop); // Output: Desktop { motherboard: "Gigabyte", cpu: "AMD Ryzen 9", ram: "32GB", storage: "1TB NVMe SSD", display: "27-inch 4K UHD" }
miDesktop.turnOn(); // Output: La desktop está encendida
