const router = require('express-promise-router')();

const { index } = require('../controllers/Personaje.controller');

router.get('/', index);



module.exports = router;