// Interfaz para la fábrica abstracta
interface FabricaAbstracta {
  crearProductoA(): ProductoA;
  crearProductoB(): ProductoB;
}

// Implementación de fábrica abstracta concreta
class FabricaConcreta1 implements FabricaAbstracta {
  crearProductoA(): ProductoA {
    return new ProductoA1();
  }

  crearProductoB(): ProductoB {
    return new ProductoB1();
  }
}

// Implementación de fábrica abstracta concreta
class FabricaConcreta2 implements FabricaAbstracta {
  crearProductoA(): ProductoA {
    return new ProductoA2();
  }

  crearProductoB(): ProductoB {
    return new ProductoB2();
  }
}

// Interfaz para ProductoA
interface ProductoA {
  operacion(): string;
}

// Implementación de ProductoA concreto
class ProductoA1 implements ProductoA {
  operacion(): string {
    return "Operación de ProductoA1";
  }
}

// Implementación de ProductoA concreto
class ProductoA2 implements ProductoA {
  operacion(): string {
    return "Operación de ProductoA2";
  }
}

// Interfaz para ProductoB
interface ProductoB {
  operacion(): string;
}

// Implementación de ProductoB concreto
class ProductoB1 implements ProductoB {
  operacion(): string {
    return "Operación de ProductoB1";
  }
}

// Implementación de ProductoB concreto
class ProductoB2 implements ProductoB {
  operacion(): string {
    return "Operación de ProductoB2";
  }
}

// Ejemplo de uso
function clienteCodigo(fabrica: FabricaAbstracta) {
  const productoA = fabrica.crearProductoA();
  const productoB = fabrica.crearProductoB();

  console.log(productoA.operacion());
  console.log(productoB.operacion());
}

// Uso de la fábrica concreta 1
const fabrica1 = new FabricaConcreta1();
clienteCodigo(fabrica1);

// Uso de la fábrica concreta 2
const fabrica2 = new FabricaConcreta2();
clienteCodigo(fabrica2);
