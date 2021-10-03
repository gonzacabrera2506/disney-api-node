import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Personaje = sequelize.define('personaje', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    imagen: { type: Sequelize.TEXT },
    nombre: { type: Sequelize.TEXT },
    edad: { type: Sequelize.INTEGER },
    peso: { type: Sequelize.NUMBER },
    historia: { type: Sequelize.TEXT },
    peliculasid: { type: Sequelize.ARRAY(Sequelize.INTEGER) }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Personaje;