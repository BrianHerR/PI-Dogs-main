const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeGetDogs = require('./routeGetDogs');
const routeGetId = require('./routeGetId');
const routePost = require('./routePost');
const routeTempe = require('./routeTempe');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', routeGetDogs);

router.get('/dogs/:idRaza', routeGetId);

router.post('/dogs', routePost)

router.get('/temperaments', routeTempe);




module.exports = router;
