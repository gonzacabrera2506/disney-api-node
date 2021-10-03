import Usuario from "../models/Usuario";
import jwt from 'jsonwebtoken';
import config from "../../configs/config";

module.exports = {

    nuevoUsuario: async (req, res) => {
        const { usuario, password, email } = req.body;
        const passwordEncriptado = await Usuario.encryptPassword(password);
        try {
            let usuarioNuevo = await Usuario.create({
                usuario,
                password: passwordEncriptado,
                email
            });
            {
                fields: ['usuario', 'password', 'email']
            }
            if (usuarioNuevo) {
                //TOKEN 
                const token = jwt.sign({ id: usuarioNuevo._id }, config.llave, {
                    expiresIn: 60 * 60 * 24
                });

                return res.status(200).json({
                    auth: true,
                    token,
                    message: 'Usuario creado correctamente',
                    data: usuarioNuevo
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ha ocurrido un error',
                data: {}
            });
        }
    },

    login: async (req, res) => {
        try {
            const { email } = req.body;
            const usuario = await Usuario.findOne({
                where: { email }
            });
            if (!usuario) {
                return res.status(404).send("El email no se encuentra registrado!");
            }
            const validarPassword = await usuario.validatePassword(password);
            if (!validarPassword) {
                return res.status(401).json({ auth: false, token: null });
            }
            //GENERAR TOKEN
            const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 60 * 60 * 24
            })

            res.json({ auth: true, token });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ha ocurrido un error',
                data: {}
            });
        }
    },

    getData: async (req, res) => {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({
                auth: false,
                message: 'No hay token disponible'
            });
        }

        const decoded = jwt.verify(token, config.llave);

        const usuario = await Usuario.findById(decoded.id, { password: 0 });
        if (!usuario) {
            return res.status(401).send('No se encontro ese usuario');
        }

        res.json(usuario);
    }









}