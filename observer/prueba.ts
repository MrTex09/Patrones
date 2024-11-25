namespace mysnamespace {
    interface observador{
        actualizar(estado: string): void 
    }
     class Cocina implements observador {
        actualizar(estado: string): void {
            console.log(`Cocina notificada: Pedido ${estado}`);
        }
    }
        class PersonalSala implements observador {
            actualizar(estado: string): void {
                console.log(`personal de sala noriticado: Pedido ${estado}`)
            }
    }
    class SistemaNotificacionesCliente implements observador
    {
        actualizar(estado: string): void {
            console.log(`cliente notificado : pedido ${estado}`);
        }
    }
    
    class Pedido {
        private observadores: observador[] =[];
        private estado: string = "en preparacion ";

        agregarObservador(observador: observador): void {
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

    const pedido = new Pedido();
    const cocina = new Cocina();
    const personalSala = new PersonalSala();
    const notificacionesCliente = new SistemaNotificacionesCliente();

    pedido.agregarObservador(cocina);
    pedido.agregarObservador(personalSala);
    pedido.agregarObservador(notificacionesCliente);
    pedido.cambiarEstado("listo para servir");
    pedido.cambiarEstado("enviado a cliente");
    pedido.cambiarEstado("entregado");
}
