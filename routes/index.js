let express = require('express');
let PlaceController = require('../controllers/PlaceController');

let router = express.Router();

//Listar todos los lugares
router.get('/places', PlaceController.show);
//Buscar un lugar por id
router.get('/places/:id', PlaceController.find);
//Crear un lugar
router.post('/places', PlaceController.store);
//Actualizar un lugar
router.put('/places/:id', PlaceController.update);
//Eliminar un lugar
router.delete('/places/:id', PlaceController.destroy);


//Buscar un user por id
router.get('/user/:id', UserController.find);
//Crear un user
router.post('/user', UserController.store);

module.exports = router;
