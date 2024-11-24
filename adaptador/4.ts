namespace mysnamespace {
    // Sistema antiguo
class OldOrderSystem {
    placeOrder(): void {
        console.log("Pedido procesado en el sistema antiguo");
    }
}

// Sistema nuevo
class NewOrderSystem {
    submitOrder(): void {
        console.log("Pedido procesado en el sistema nuevo");
    }
}

// Adaptador para el sistema antiguo
class OldOrderAdapter extends NewOrderSystem {
    private oldSystem: OldOrderSystem;

    constructor(oldSystem: OldOrderSystem) {
        super();
        this.oldSystem = oldSystem;
    }

    submitOrder(): void {
        this.oldSystem.placeOrder(); // Llama al método del sistema antiguo.
    }
}

// Código de prueba
const oldSystem = new OldOrderSystem();
const adapter = new OldOrderAdapter(oldSystem);

const newSystem = new NewOrderSystem();

newSystem.submitOrder(); // Pedido procesado en el sistema nuevo
adapter.submitOrder();   // Pedido procesado en el sistema antiguo

}