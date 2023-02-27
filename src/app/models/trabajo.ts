export class Trabajo{
    id?:Number;
    img_logo: String;
    nombre_empresa:String;
    fecha:String;
    descripcion:String;

    constructor(img_logo: String, nombre_empresa: String, fecha: String, descipcion: String){
        this.img_logo = img_logo;
        this.nombre_empresa = nombre_empresa;
        this.fecha = fecha;
        this.descripcion = descipcion;
    }

}