const mongoose =  require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
	nombre: String,
	mail: String,
	consulta: String,
    }
)

module.exports = mongoose.model('user', MessageSchema)