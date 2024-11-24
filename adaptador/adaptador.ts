// Clase antigua para calcular descuentos
class DescuentoAntiguo {
    public calcularDescuento(precio: number): number {
        return precio * 0.9; // 10% de descuento
    }
}

// Nueva clase con una interfaz diferente
class NuevoDescuento {
    public aplicarDescuento(precio: number): number {
        return precio * 0.85; // 15% de descuento
    }
}

// Adaptador para hacer que NuevoDescuento funcione como DescuentoAntiguo
class AdaptadorDescuento {
    private nuevoDescuento: NuevoDescuento;

    constructor() {
        this.nuevoDescuento = new NuevoDescuento();
    }

    public calcularDescuento(precio: number): number {
        // Se adapta el método de la nueva clase a la interfaz antigua
        return this.nuevoDescuento.aplicarDescuento(precio);
    }
}

// Uso del patrón Adaptador
const adaptador = new AdaptadorDescuento();
console.log(adaptador.calcularDescuento(100)); // 85