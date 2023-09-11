const express = require('express')
const Cursocontroller = require('../controllers/curso')
const router  = express.Router()

router.get('/home',CursoController.home);
router.post('/test',CursoController.test);
router.post('/save-curso',CursoController.saveCurso);
router.get('/curso/:id?',CursoController.getCurso);
router.get('/cursos',CursoController.getCursos);
router.put('/curso/:id',CursoController.updateCurso);
router.delete('/curso/:id',CursoController.deleteCurso);

module.exports = router