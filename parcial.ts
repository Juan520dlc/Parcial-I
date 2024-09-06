import { Farmacia } from "./farmacia";

class Productos {
    private size: number;
    private data: number[];

    constructor(size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    // Unicamente accesible para Insert
    private hash(key: number): number {
        return key % this.size;
    }

    public insertar(key: number): void {
        let index: number = this.hash(key);
    }

    public buscar(key: number): number {
        let index: number = this.hash(key);
        return this.data[index];
    }

    public imprimir(): void {
        let all_data: string = "";
        for (const key of this.data) {
            all_data += key + " "
        }
        console.log(all_data);
    }
}

let producto: Productos = new Productos(9)
let sistema: Farmacia = new Farmacia("P001", "Pepto-Bismol", 50.00, 65.00)

let productoBuscar:number = 1;
console.log("EL producto: " + producto.buscar(productoBuscar));
sistema.mostrarDatos();

