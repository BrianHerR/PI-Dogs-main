const { Dog, Temperaments } = require('../db');

const postDogs = async (dog) => {
    try {
        
        const { name, height_max, height_min, weight_max, weight_min, life_span_max, life_span_min, temperament } = dog;
        
        const existe = await Dog.findOne({
            where:{
                name: name
            }
        })
        
        if(existe){
            return 'el dog ya existe', existe
        }
        const nuevoDog = await Dog.create({
            name,
            height_max,
            height_min,
            weight_max,
            weight_min,
            life_span_max,
            life_span_min,
        })
        
        
        temperament.map(async (tempe)=>{
            const [temperamentos, created] = await Temperaments.findOrCreate({
                where:{
                    name: tempe
                }})
        })
        const temperamentos = await Temperaments.findAll({
            where:{
                name: temperament
            }
        })
        
        
        
        

        await nuevoDog.addTemperaments(temperamentos)
        
        const resultado = await Dog.findOne({
            where: {
                name: name
            },
            include:{
                model: Temperaments,
                attributes:['name'],
                through: { attributes: [] }
            }
        })
        return resultado
    }catch(error){
        console.error(error)
    }  
} 

module.exports = postDogs;