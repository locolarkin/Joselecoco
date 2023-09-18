const mongoose =  require('mongoose')

const CursoSchema = new mongoose.Schema(
    {
        _id: string,
		name: string,
		description: string,
		category: string,
		duracion: number,
		temas: string,
		image: string
    }
)

module.exports = mongoose.model('curso', CursoSchema)