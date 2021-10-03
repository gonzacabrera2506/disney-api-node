import Sequelize from 'sequelize';
import { sequalize } from '../database/database';

const Genero = sequalize.define('generos', {
    id: { type: Sequelize.INTEGER, primaryKey: true},
    nombre: { type: Sequelize.TEXT },
    imagen: { type: Sequelize.TEXT },
    peliculasid: { type: Sequelize.ARRAY }
}, {
    timestamps: false
});

export default Genero;