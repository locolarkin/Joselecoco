export class GTask{
	static _id: string;
	constructor(
		public UserId: string,
		public TaskId: string,
		public taskname: string,
		public importancia: string,
		public estate: string,
		public award: number,
	){}
}