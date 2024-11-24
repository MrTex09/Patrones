class AdministradorDeNominas {
    private static instancia: AdministradorDeNominas;
    private salarios: { [empleado: string]: number } = {};

    private constructor() {}

    public static obtenerInstancia(): AdministradorDeNominas {
        if (!AdministradorDeNominas.instancia) {
            AdministradorDeNominas.instancia = new AdministradorDeNominas();
        }
        return AdministradorDeNominas.instancia;
    }

    public registrarSalario(empleado: string, salario: number): void {
        this.salarios[empleado] = salario;
    }

    public obtenerSalario(empleado: string): number {
        return this.salarios[empleado];
    }
}

// Uso del Singleton
const adminNominas = AdministradorDeNominas.obtenerInstancia();
adminNominas.registrarSalario('Juan', 50000);
console.log(adminNominas.obtenerSalario('Juan')); // 50000