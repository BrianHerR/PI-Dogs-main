const { Dog, Temperaments } = require('../db')

const postDogs = async ({image, name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max,
    temperament}) => {
        if(image&&name&&height_max&&height_min&&weight_max&&weight_min&&life_span_max&&life_span_min&&temperament){
            const [ dogNuevo, create ] = await Dog.findOrCreate({
                
                where: { image, 
                    name,
                    height_min,
                    height_max,
                    weight_min,
                    weight_max,
                    life_span_min,
                    life_span_max,
                    include: [
                        {
                            model: Temperaments,
                            where: { name: temperament },
                        }
                    ]
                }})
                if(!create){return `el Dog ${name} ya existe`}
                else{ return `se creo correctamente ${dogNuevo}`}
            }}
module.exports = postDogs