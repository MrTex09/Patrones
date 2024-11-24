namespace mysnamespace {
    interface Observador {
        actualizar(estado: string): void;
    }
    
    class Cocina implements Observador {
        actualizar(estado: string): void {
            console.log(`Cocina notificada: Pedido ${estado}`);
        }
    }
    
    class PersonalSala implements Observador {
        actualizar(estado: string): void {
            console.log(`Personal de sala notificado: Pedido ${estado}`);
        }
    }
    
    class SistemaNotificacionesCliente implements Observador {
        actualizar(estado: string): void {
            console.log(`Cliente notificado: Pedido ${estado}`);
        }
    }
    
    class Pedido {
        private observadores: Observador[] = [];
        private estado: string = "en preparación";
    
        agregarObservador(observador: Observador): void {
            this.observadores.push(observador);
        }
    
        cambiarEstado(nuevoEstado: string): void {
            this.estado = nuevoEstado;
            this.notificarObservadores();
        }
    
        private notificarObservadores(): void {
            this.observadores.forEach(obs => obs.actualizar(this.estado));
        }
    }
    
    // Código de prueba
    const pedido = new Pedido();
    
    const cocina = new Cocina();
    const personalSala = new PersonalSala();
    const notificacionesCliente = new SistemaNotificacionesCliente();
    
    pedido.agregarObservador(cocina);
    pedido.agregarObservador(personalSala);
    pedido.agregarObservador(notificacionesCliente);
    
    pedido.cambiarEstado("listo para servir");
    // Cocina notificada: Pedido listo para servir
    // Personal de sala notificado: Pedido listo para servir
    // Cliente notificado: Pedido listo para servir
    
}