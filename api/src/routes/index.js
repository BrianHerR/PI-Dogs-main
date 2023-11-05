const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('../controllers/getDogs')
const getIdRaza = require('../controllers/getIdRaza')
const getName = require('../controllers/getName')
const postDogs = require('../controllers/postDogs');
const getTempe = require('../controllers/getTempe');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs);
router.get('/dogs/:idRaza', getIdRaza);
router.get('/name', getName);
router.post('/dogs', postDogs)
router.get('/temperaments', getTempe);




module.exports = router;
