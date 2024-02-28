const getDogs = require('../controllers/getDogs')
const getName = require('../controllers/getName')

const routeGetDogs = async (req, res)  => {
    try {
        
        const { name } = req.query
        
        if(name){
            const response = await getName(name)
            
            return res.status(200).json(response);
        }else{
            const response = await getDogs();
            return res.status(200).json(response);

        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = routeGetDogs
