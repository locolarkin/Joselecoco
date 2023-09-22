const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const conectarDB = require('./db')

const app = express()

conectarDB()

app.use(cors())
app.use(express.json())

app.use('/api/usuario', require('./routes/usuarioRoutes'))


app.listen(3700, () =>{
    console.log('El servidor está funcionando correctamente')
})