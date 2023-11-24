const getIdRaza = require('../controllers/getIdRaza')

const routeGetId = async (req, res) => {
    try {
        const { idRaza } = req.params
        const response = await getIdRaza(idRaza);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = routeGetId