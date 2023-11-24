const getTempe = require('../controllers/getTempe');

const routeTempe = async (req, res) => {
    try {
        const response = await getTempe();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = routeTempe;