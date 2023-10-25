const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs);
router.get('/dogs/:idRaza', getIdRaza);
router.get('/dogs/name', getName);




module.exports = router;
