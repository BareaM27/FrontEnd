export class Persona{
    id?: number;
    foto: String;
    sobre_mi: String;


    constructor(foto: String,sobre_mi: String){
        this.foto = foto;
        this.sobre_mi = sobre_mi;
    }
}