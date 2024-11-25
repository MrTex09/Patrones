namespace mysnamespace {
    class  ReservationManager {
        private static instance: ReservationManager | null = null;
        
        private constructor() {

        }
        public static getInstance(): ReservationManager {
            if (!ReservationManager.instance) {
                ReservationManager.instance = new
                ReservationManager();
            }
            return ReservationManager.instance;
        }
        public static makeinstance(name:string, time:string):void {
            console.log(`Reserva hecha para ${name} a las ${time}`);
        }
    }

    const manager1 = ReservationManager.getInstance();
    const manager2 = ReservationManager.getInstance();
    console.log(manager1 === manager2); 
}