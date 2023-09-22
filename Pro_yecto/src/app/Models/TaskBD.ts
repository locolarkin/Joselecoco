export class GTask{
	static _id: string;
	constructor(
		public nombre: string,
		public descripcion: string,
		public importancia: string,
		public estado: string,
		public reward: number,
		public est_entrega: string,
		public fec_entrega: Date

	){}
}