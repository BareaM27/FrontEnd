export class Proyecto{
    id?: number;
    captura: String;
    nombre: String;
    descripcion: String;


    constructor(captura:String, nombre:String, descripcion:String){
        this.captura = captura;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}