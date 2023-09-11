const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema(
    {
        name: {
            type: String
        },
        surname: {
            type: String
        },
        age: {
            type: Number
        },
        mail: {
            type: String,
            unique: true,
            required: true
        },
        phone: {
            type: String,
            unique: true,
        },
        image: {
            type: String
        },
        rank: {
            type: Number
        },
        user: {
            type: String
        }
    }
)
module.exports = mongoose.model('user', UserSchema)