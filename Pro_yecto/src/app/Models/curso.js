const mongoose =  require('mongoose')

const CursoSchema = new mongoose.Schema(
    {
		nombre: string,
		descripcion: string,
		categoria: string,
		duracion: number,
		temas: string,
		imagen: string
    }
)

module.exports = mongoose.model('curso', CursoSchema)