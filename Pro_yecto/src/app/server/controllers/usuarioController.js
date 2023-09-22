const Usuario = require('../models/usuarioModel')

exports.crearUsuario = async (req, res) => {
    try{
        let usuario
        usuario = new Usuario(req.body)
        await usuario.save()
        res.send(usuario)
    }catch (error){
        console.log(error)
        res.status(500).send('La cosa ha ido mal')
    }
}

exports.obtenerUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.find()
        res.json(usuarios)

    }catch (error){
        console.log(error)
        res.status(500).send('La cosa ha ido mal')
    }
}


exports.obtenerUsuario = async (req, res) => {
    try{
        let usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            res.status(404).json({msg: 'El usuario no existe'})
        }
        res.json(usuario)
    }catch (error){
        console.log(error)
        res.status(500).send('La cosa ha ido mal')
    }
}


exports.actualizarUsuario = async (req, res) => {
    try{
        const{nombre, apellidos,birthdate,email,phone,foto,pass,fechaAlta,rank} 
        =req.body
        let usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            res.status(404).json({msg: 'El usuario no existe'})
        }
        usuario.nombre = nombre
        usuario.apellidos = apellidos
        usuario.birthdate = birthdate
        usuario.email = email
        usuario.phone = phone
        usuario.foto = foto
        usuario.pass = pass
        usuario.rank = rank
        usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario,
        {new:true})
        res.json(usuario)

    }catch (error){
        console.log(error)
        res.status(500).send('La cosa ha ido mal')
    }
}


exports.eliminarUsuario = async (req, res) => {
    try{
        let usuario = await Usuario.findById(req.params.id)
        if(!usuario){
            res.status(404).json({msg: 'El usuario no existe'})
        }
        await Usuario.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Usuario eliminado'})
    }catch (error){
        console.log(error)
        res.status(500).send('La cosa ha ido mal')
    }
}



