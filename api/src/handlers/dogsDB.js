const { Dog , Temperaments } = require('../db')

const dogsDB = async () => {

    const Dogs = await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: { attributes: [] },
          }
    })
    

    return Dogs;
}

module.exports = dogsDB;