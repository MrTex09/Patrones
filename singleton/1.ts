namespace mysnamespace { 
    class ReservationManager {
        private static instance: ReservationManager | null = null;
    
        // Hacer privado el constructor para evitar instanciación directa
        private constructor() {
            // Inicialización del gestor de reservas
        }
    
        // Método estático para obtener la única instancia
        public static getInstance(): ReservationManager {
            if (!ReservationManager.instance) {
                ReservationManager.instance = new ReservationManager();
            }
            return ReservationManager.instance;
        }
    
        // Métodos para gestionar reservas 
        public makeReservation(name: string, time: string): void {
            console.log(`Reserva hecha para ${name} a las ${time}`);
        }
    }
    
    // Código de prueba
    const manager1 = ReservationManager.getInstance();
    const manager2 = ReservationManager.getInstance();
    
    console.log(manager1 === manager2); // Esto imprimirá true
}    