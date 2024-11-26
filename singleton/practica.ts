class Counter {
    private static instance: Counter;
    private count: number = 0;
  
    // Constructor privado para evitar instanciación directa
    private constructor() {}
  
    // Método estático para obtener la instancia única
    public static getInstance(): Counter {
      if (!Counter.instance) {
        Counter.instance = new Counter();
      }
      return Counter.instance;
    }
  
    // Incrementa el valor del contador
    public increment(): void {
      this.count++;
    }
  
    // Devuelve el valor actual del contador
    public getValue(): number {
      return this.count;
    }
  }
  
  // Ejemplo de uso
  const counter1 = Counter.getInstance();
  counter1.increment();
  counter1.increment();
  
  const counter2 = Counter.getInstance();
  console.log(counter2.getValue()); // Salida: 2
  
  // Comprobación de que es la misma instancia
  console.log(counter1 === counter2); // Salida: true
  