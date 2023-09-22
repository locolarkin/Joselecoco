export class GCurso{
	public nombre: string
	public descripcion: string
	public categoria: string
	public duracion: number
	public temas: string
	public imagen: string
	constructor(nombre: string, descripcion: string, categoria: string, duracion: number, temas: string, imagen: string,){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.duracion = duracion;
        this.temas = temas;
		this.imagen = imagen;
    }
}