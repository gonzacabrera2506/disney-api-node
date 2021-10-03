import Sequelize  from 'sequelize';
import { sequelize } from '../database/database';

const Pelicula = sequelize.define('peliculas', {
    id: { type: Sequelize.INTEGER, primaryKey: true},
    imagen: { type: Sequelize.TEXT },
    titulo: { type: Sequelize.TEXT },
    fechaDeCreacion: { type: Sequelize.DATE },
    calificacion: { type: Sequelize.INTEGER },
    personajeid: { type: Sequelize.ARRAY }
}, {
    timestamps: false
});

export default Pelicula;