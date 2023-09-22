const mongoose =  require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
	remitente: String,
	mail: String,
	asunto: String,
	mensaje: String,
    }
)

module.exports = mongoose.model('user', MessageSchema)