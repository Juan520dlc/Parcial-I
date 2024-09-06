class Farmacia {
    private codigo: String;
    private nombre: String;
    private precioCosto: number;
    private precioVenta: number;

    constructor(codigo: String, nombre: String, precioCosto: number, precioventa: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioCosto = precioCosto;
        this.precioVenta = precioventa;
    }

    public mostrarDatos() {
        console.log("Código: " + this.codigo);
        console.log("Nombre: " + this.nombre);
        console.log("Precio Costo: " + this.precioCosto);
        console.log("Precio Venta: " + this.precioVenta);
    }
    
    
}
;



