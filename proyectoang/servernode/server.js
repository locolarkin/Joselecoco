const express = require('express')

const app = express()

const port = 3700

app.listen(port,() =>{
    console.log('La aplicación está en línea...')
})
// const userRouters = require('./app/routes/user')

// app.use(userRouters)

// Conexión con Base de datos

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/appweb' , {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Conexión establecida...")
})
.catch(err => console.log(err))