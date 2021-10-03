const router = require('express-promise-router')();

const { index, 
        nuevoPersonaje,
        modificarPersonaje,
        eliminarPersonaje } = require('../controllers/Personaje.controller');

router.get('/', index);
router.post('/', nuevoPersonaje);
router.put('/:id', modificarPersonaje);
router.delete('/:id', eliminarPersonaje);



module.exports = router;