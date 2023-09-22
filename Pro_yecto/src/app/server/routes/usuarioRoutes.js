const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

router.post('/',usuarioController.crearUsuario)
router.get('/',usuarioController.obtenerUsuarios)
router.put('/:id',usuarioController.obtenerUsuario)
router.get('/:id',usuarioController.actualizarUsuario)
router.delete('/:id',usuarioController.eliminarUsuario)

module.exports = router