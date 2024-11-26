namespace mysnamespace{
    interface Pedido {
        obtenerDetalles(): string;
    }
  
    class DineInOrder implements Pedido {
        obtenerDetalles(): string{
            return "pedido para comer en el restaurante";
        }
    }
    
    class TakeAwayOrder  implements Pedido {
        obtenerDetalles(): string{
            return "pedido paraq comer en el restaurante"
        }
    }
    
    class PedidoFactory {
        public static crearPedido(tipo: string): Pedido {
            if (tipo === "dine-in")
                return new DineInOrder();
            else if (tipo === "take-away") {
                return new TakeAwayOrder();
            }
            throw new Error("El tipo de pedido no es válido");
        }
    }

    const pedido1 = PedidoFactory.crearPedido("dine-in")
    const pedido2 = PedidoFactory.crearPedido("take-away")

    console.log(pedido1.obtenerDetalles()); // imprime: "Pedido para comer en el restaurante"
    console.log(pedido2.obtenerDetalles()); // imprime: "Pedido para comer en el restaurante"
}





