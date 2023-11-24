const postDogs = require('../controllers/postDogs');

const routePost = async (req, res) => {
    try {
        
        const { name, height_min, height_max,
            weight_min, weight_max, life_span_min, life_span_max, temperament
         } = req.body
        
        if(name&&height_max&&height_min&&weight_max&&weight_min&&life_span_max&&life_span_min&&temperament){
            
            const dog = { name, height_min, height_max,
                weight_min, weight_max, life_span_min, life_span_max, temperament}
            
            const response = await postDogs(dog);

            return res.status(201).json(response);
        }
    } catch (error) {
        
        return res.status(400).json({ error: error.message });
    }
}

module.exports = routePost