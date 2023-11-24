const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Dog", {
    id: {

      type: DataTypes.UUID,
      
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,

      primaryKey: true,

    },
    name: {

      type: DataTypes.STRING,

      allowNull: false,

      unique: true,

    },

    image: {

      type: DataTypes.STRING,

      defaultValue: 'https://www.shutterstock.com/image-photo/portrait-cute-looking-small-dog-260nw-2157126227.jpg'

    },

    height_min: {

      type: DataTypes.INTEGER,

      allowNull: false,

    },
    height_max: {

      type: DataTypes.INTEGER,

      allowNull: false,

    },

    weight_min: {
      
      type: DataTypes.INTEGER,
      
      allowNull: false,
    },
    weight_max: {
      
      type: DataTypes.INTEGER,
      
      allowNull: false,
    },
    life_span_min: {
      
      type: DataTypes.INTEGER,
      
      allowNull: false,
    },
    life_span_max: {
      
      type: DataTypes.INTEGER,
      
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,

      defaultValue:'database'
    }

  }, { timestamps: false });
};
