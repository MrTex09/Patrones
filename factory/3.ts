namespace mysnamespace{
    interface Pedido {
        obtenerDetalles(): string;
    }
    
    class DineInOrder implements Pedido {
        obtenerDetalles(): string {
            return "Pedido para comer en el restaurante";
        }
    }
    
    class TakeAwayOrder implements Pedido {
        obtenerDetalles(): string {
            return "Pedido para llevar";
        }
    }
    
    class PedidoFactory {
        public static crearPedido(tipo: string): Pedido {
            if (tipo === "dine-in") {
                return new DineInOrder();
            } else if (tipo === "take-away") {
                return new TakeAwayOrder();
            }
            throw new Error("Tipo de pedido no reconocido");
        }
    }
    
    // Código de prueba
    const pedido1 = PedidoFactory.crearPedido("dine-in");
    const pedido2 = PedidoFactory.crearPedido("take-away");
    
    console.log(pedido1.obtenerDetalles()); // Pedido para comer en el restaurante
    console.log(pedido2.obtenerDetalles()); // Pedido para llevar
    
}