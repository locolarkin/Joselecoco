const model = require('../models/curso')
const fs = require('fs')

const controller = {
    home: function(req,res){
        return res.status(200).send({
            message:'Soy la home'
        });
    },
    test: function(req,res){
        return res.status(200).sen({
            message: "Soy el método o acción test del controlador de Curso"
        });
    },

saveCurso: function(req,res){
    const curso = new model();
    const params = req.body;
    curso.name = params.name;
    curso.description = params.description;
    curso.category = params.category;
    curso.year = params.year;
    curso.langs = params.langs;

    curso.save((err, cursoStored) => {
        if(err) return res.status(500).send({message: 'error al guardar el documento'})

        if(!projectStored) return res.status(404).send({message: 'No se ha podido'})

        return res.status(200).send({curso: cursoStored});
    });
},

getCurso: function(req,res){
    var cursoId = req.params.id;

    if(cursoId == null) return res.status (404).send({message: 'El usuario no existe'})

    curso.findById(cursoId, (err, curso) => {

        if(err) return res.status(500).send({message:'Error al devolver los datos'})

        if(!curso) return res.status(404).send({message: 'El Ususario no existe.'});
        return res.status(200).send({projects

        });

    });
},

getCursos: function(req,res){
    curso.find({}).sort('-year').exec((err,cursos) => {
        if(err) return res.status(500).send({message:'Error al devolver los datos'});
        if(!projects) return res.status(404).send({message: 'No hay ususarios que mostrar.'});
        return res.status(200).send({projects});
    });

},

updateCurso: function(req,res){
    var cursoId = req.params.id;
    var update = req.body;
    Curso.findByIdAndUpdate(cursoId, update, {new:true}, (err,cursoUpdated) => {
        if(err) return res.status(500).send({message:'Error al actualizar'});
        if(!cursoUpdated) return res.status(404).send({message:'No existe el usuario a actualizar'});
        return res.status(200).send({
            curso: cursoUpdated
        });
    });
},

deleteCurso: function(req,res){
    var cursoId = req.params.id;
    
    Curso.findByIdAndRemove(cursoId, (err,cursoRemoved) => {
        if(err) return res.status(500).send({message:'No se pudo borrar el Usuario'});
        if(!cursoRemoved) return res.status(404).send({message:'No se puede eliminar este Usuario'});
        return res.status(200).send({
            curso: cursoRemoved
        });
    });
},
};
module.exports = controller;