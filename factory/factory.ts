namespace mysnamespace {
    // Interfaz común que define un contrato para los productos.
    // Cada producto debe implementar el método calcularPrecio.
    interface Producto {
        calcularPrecio(): number;
    }
    
    // Clase que representa un producto físico.
    class ProductoFisico implements Producto {
        private costo: number; // Costo base del producto físico.
    
        constructor(costo: number) {
            this.costo = costo; // Inicializa el costo al crear un producto físico.
        }
    
        // Método para calcular el precio final del producto físico.
        // Se suma una tarifa de envío fija de 10 al costo base.
        calcularPrecio(): number {
            return this.costo + 10;
        }
    }
    
    // Clase que representa un producto digital.
    class ProductoDigital implements Producto {
        private costo: number; // Costo base del producto digital.
    
        constructor(costo: number) {
            this.costo = costo; // Inicializa el costo al crear un producto digital.
        }
    
        // Método para calcular el precio final del producto digital.
        // El costo base no incluye tarifa adicional porque no hay envío.
        calcularPrecio(): number {
            return this.costo;
        }
    }
    
    // Clase Tienda que actúa como una fábrica de productos.
    class Tienda {
        // Método que crea un producto según el tipo especificado ('fisico' o 'digital').
        public crearProducto(tipo: string, costo: number): Producto {
            // Si el tipo es 'fisico', devuelve una instancia de ProductoFisico.
            if (tipo === 'fisico') {
                return new ProductoFisico(costo);
            }
            // Si el tipo es 'digital', devuelve una instancia de ProductoDigital.
            else if (tipo === 'digital') {
                return new ProductoDigital(costo);
            }
            // Si el tipo no es válido, lanza un error.
            throw new Error('Tipo de producto no reconocido');
        }
    }
    
    // Uso del Factory Method para crear productos.
    const tienda = new Tienda(); // Se crea una instancia de Tienda.
    
    // Se crea un producto físico con un costo base de 100.
    const producto1 = tienda.crearProducto('fisico', 100);
    // Se crea un producto digital con un costo base de 50.
    const producto2 = tienda.crearProducto('digital', 50);
    
    // Muestra el precio final del producto físico (100 + 10).
    console.log(producto1.calcularPrecio()); // 110
    
    // Muestra el precio final del producto digital (50).
    console.log(producto2.calcularPrecio()); // 50
}
