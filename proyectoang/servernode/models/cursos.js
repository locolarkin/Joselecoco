const mongoose = require('mongoose')

const CursosSchema =new mongoose.Schema(
    {
        name: {
            type: String
        },
        info: {
            type: String
        },
        duration: {
            type: String
        }
    }
)
module.exports = mongoose.model('cursos', CursosSchema)