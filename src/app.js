import express, { json } from 'express';
import morgan from 'morgan';
import config from '../configs/config';

//importar routes
const usuarioRoutes = require('./routes/Usuario.routes');
const personajesRoutes = require('./routes/Personaje.routes');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(express.json());

app.set('llave', config.llave);

//routes
app.use('/auth', usuarioRoutes);
app.use('/characters', personajesRoutes);

export default app;
