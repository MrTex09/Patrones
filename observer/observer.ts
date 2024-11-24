interface Observador {
    actualizar(salario: number): void;
}

class Empleado implements Observador {
    constructor(private nombre: string) {}

    actualizar(salario: number): void {
        console.log(`${this.nombre} ha sido notificado. Nuevo salario: ${salario}`);
    }
}

class AdministradorDeSalarios {
    private observadores: Observador[] = [];
    private salario: number = 0;

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarSalario(nuevoSalario: number): void {
        this.salario = nuevoSalario;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.salario));
    }
}

// Uso del patrón Observer
const adminSalarios = new AdministradorDeSalarios();
const empleado1 = new Empleado('Carlos');
const empleado2 = new Empleado('Ana');

adminSalarios.agregarObservador(empleado1);
adminSalarios.agregarObservador(empleado2);

adminSalarios.cambiarSalario(60000);
// Carlos ha sido notificado. Nuevo salario: 60000
// Ana ha sido notificado. Nuevo salario: 60000