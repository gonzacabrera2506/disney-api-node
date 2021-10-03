import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import bcrypt from 'bcrypt';

const Usuario = sequelize.define('usuario', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    usuario: { type: Sequelize.TEXT },
    password: { type: Sequelize.TEXT },
    email: { type: Sequelize.TEXT }
}, {
    timestamps: false,
    freezeTableName: true
});

Usuario.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

Usuario.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

export default Usuario;