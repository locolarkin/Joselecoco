export class Guser{
	public _id?: string
	public nombre: string
	public apellidos: string
	public birthdate: string
	public email: string
	public phone: string
	public foto: string
	public pass: string
	public rank: Boolean
	constructor(nombre: string, apellidos: string, birthdate: string, email: string, phone: string, foto: string, pass: string, rank: Boolean){
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.birthdate = birthdate;
			this.email = email;
			this.phone = phone;
			this.foto = foto;
			this.pass = pass;
			this.rank = rank;
		  }
}