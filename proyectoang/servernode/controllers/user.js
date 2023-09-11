const model = require('../models/user')
const fs = require('fs')

const controller = {
    home: function(req,res){
        return res.status(200).send({
            message:'Soy la home'
        });
    },
    test: function(req,res){
        return res.status(200).sen({
            message: "Soy el método o acción test del controlador de User"
        });
    },

saveUser: function(req,res){
    const user = new Model();
    const params = req.body;
    user.name = params.name;
    user.description = params.description;
    user.category = params.category;
    user.year = params.year;
    user.langs = params.langs;

    user.save((err, userStored) => {
        if(err) return res.status(500).send({message: 'error al guardar el documento'})

        if(!projectStored) return res.status(404).send({message: 'No se ha podido'})

        return res.status(200).send({user: userStored});
    });
},

getUser: function(req,res){
    var userId = req.params.id;

    if(userId == null) return res.status (404).send({message: 'El usuario no existe'})

    user.findById(userId, (err, user) => {

        if(err) return res.status(500).send({message:'Error al devolver los datos'})

        if(!user) return res.status(404).send({message: 'El Ususario no existe.'});
        return res.status(200).send({projects

        });

    });
},

getUsers: function(req,res){
    user.find({}).sort('-year').exec((err,users) => {
        if(err) return res.status(500).send({message:'Error al devolver los datos'});
        if(!projects) return res.status(404).send({message: 'No hay ususarios que mostrar.'});
        return res.status(200).send({projects});
    });

},

updateUser: function(req,res){
    var userId = req.params.id;
    var update = req.body;
    User.findByIdAndUpdate(userId, update, {new:true}, (err,userUpdated) => {
        if(err) return res.status(500).send({message:'Error al actualizar'});
        if(!userUpdated) return res.status(404).send({message:'No existe el usuario a actualizar'});
        return res.status(200).send({
            user: userUpdated
        });
    });
},

deleteUser: function(req,res){
    var userId = req.params.id;
    
    User.findByIdAndRemove(userId, (err,userRemoved) => {
        if(err) return res.status(500).send({message:'No se pudo borrar el Usuario'});
        if(!userRemoved) return res.status(404).send({message:'No se puede eliminar este Usuario'});
        return res.status(200).send({
            user: userRemoved
        });
    });
},
};
module.exports = controller;