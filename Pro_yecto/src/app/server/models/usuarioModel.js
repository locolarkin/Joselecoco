const mongoose = require ('mongoose')
const UsuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    birthdate:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    },
    rank:{
        type: Boolean,
        required: true
    },
    fechaAlta:{
        type: String,
        default: Date.now()
    },
    notes:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuario',UsuarioSchema);