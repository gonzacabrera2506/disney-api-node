import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'Dios2021',
    {
        host: 'localhost',
        dialect: 'postgres',
        omitNull: true,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);