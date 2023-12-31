
const { Temperaments } = require('../db');
const dogsAPI = require('../handlers/dogsAPI');

const getTempe = async () => {
    
        const allDogs = await dogsAPI()
        if (allDogs) {
            
            const tempeApi = allDogs.flatMap((dog) => {
                
                if (dog.temperament) {
                    return dog.temperament.flatMap((tempe) => (tempe ? tempe.split(',') : []));
                } else {
                    return ['No tiene temperamentos'];
                }
            });
            tempeApi.forEach( async (tempe) => {
                try {
                    await Temperaments.findOrCreate({
                        where:{
                            name:tempe
                        }
                    })
                    
                } catch (error) {
                    console.error(error)
                }
            });

            const allTempe =  await Temperaments.findAll()

            return allTempe; 
        }
            
            
    
    
}

module.exports = getTempe;