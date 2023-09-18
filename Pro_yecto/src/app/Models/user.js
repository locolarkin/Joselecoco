const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema(
    {
    rango: string,
	nombre: string,
	foto: string,
	edad: number,
	mail: string,
	contrasena: string,
    }
)

module.exports = mongoose.model('user', UserSchema)