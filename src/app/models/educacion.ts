export class Educacion{
    id?: Number;
    nombre: String;
    fecha: String;
    institucion: String;
    logo: String;

    constructor(nombre: String, fecha: String, institucion: String, logo: String){
        this.nombre = nombre;
        this.fecha = fecha;
        this.institucion = institucion;
        this.logo = logo;
    }
}