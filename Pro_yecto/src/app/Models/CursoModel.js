const mongoose = require('mongoose');

const CursoSchema = mongoose.Schema({
    nombre: {
        type: string,
        required: true
    },
    descripcion: {
        type: string,
        required: true
    },
    categoria: {
        type: string,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    temas: {
        type: string,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Curso', CursoSchema);