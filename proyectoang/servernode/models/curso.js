const mongoose = require('mongoose')

const CursoSchema =new mongoose.Schema(
    {
        _id: String,
        name: String,
        Taskcode: String,
        Taskdesc: String,
        Score: Number,
        Estate: String,     
    }
)
module.exports = mongoose.model('curso', UserSchema)