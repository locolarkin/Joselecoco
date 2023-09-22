export class curso{
	static _id: string;
	constructor(
		public nombre: string,
		public descripcion: string,
		public categoria: string,
		public duracion: number,
		public temas: string,
		public imagen: string
	){}
}