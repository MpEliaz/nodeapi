var express = require('express');
var router = express.Router();

var userController = require('../controllers/usuarios');

router.get('/usuarios', userController.allUser);
router.get('/usuarios/:id', userController.byId);
router.post('/usuarios', userController.addUser);
router.put('/usuarios/:id/edit', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);




module.exports = router;