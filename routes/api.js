var express = require('express');
var router = express.Router();

//USUARIOS PATH
var userController = require('../controllers/usuarios');

router.get('/usuarios', userController.all);
router.get('/usuarios/:id', userController.byId);
router.post('/usuarios', userController.add);
router.put('/usuarios/:id', userController.update);
router.delete('/usuarios/:id', userController.remove);

//PYMES PATH
var pymesController = require('../controllers/pymes');

router.get('/pymes', pymesController.all);
router.get('/pymes/:id', pymesController.byId);
router.post('/pymes', pymesController.add);
router.put('/pymes/:id', pymesController.update);
router.delete('/pymes/:id', pymesController.remove);

//EVENTOS PATH
var eventosController = require('../controllers/eventos');

router.get('/eventos', eventosController.all);
router.get('/eventos/:id', eventosController.byId);
router.post('/eventos', eventosController.add);
router.put('/eventos/:id', eventosController.update);
router.delete('/eventos/:id', eventosController.remove);




module.exports = router;