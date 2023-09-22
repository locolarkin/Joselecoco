const mongoose = require('mongoose');

const cursoSchema = mongoose.Schema({
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
    imagen: {
        type: string,
        required: true
    },

});

module.exports = mongoose.model('curso', cursoSchema);