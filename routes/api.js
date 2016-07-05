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

//COMUNAS PATH
var comunasController = require('../controllers/comunas');

router.get('/comunas', comunasController.all);
router.get('/comunas/:id', comunasController.byId);
router.post('/comunas', comunasController.add);
router.put('/comunas/:id', comunasController.update);
router.delete('/comunas/:id', comunasController.remove);

//IMAGENES PATH
var imagenesController = require('../controllers/imagenes');

router.get('/imagenes', imagenesController.all);
router.get('/imagenes/:id', imagenesController.byId);
router.post('/imagenes', imagenesController.add);
router.put('/imagenes/:id', imagenesController.update);
router.delete('/imagenes/:id', imagenesController.remove);



module.exports = router;