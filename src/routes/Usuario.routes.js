const router = require('express-promise-router')();

const {
    nuevoUsuario,
    login,
    getData
} = require('../controllers/Usuario.controller');

router.post('/register', nuevoUsuario);
router.post('login', login);
router.get('/', getData);

module.exports = router;