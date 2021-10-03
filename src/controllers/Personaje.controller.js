import Personaje from '../models/Personaje';

module.exports = {

    index: async (req, res) => {
        try {
            const personajes = await Personaje.findAll({
                attributes: ['imagen', 'nombre']
            });
            console.log(personajes);
            res.status(200).json({
                data: personajes
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ha ocurrido un error',
                data: {}
            });
        }
    },

    nuevoPersonaje: async (req, res) => {
        const { imagen, nombre, edad, peso, historia } = req.body;
        try {
            let nuevoPersonaje = await Personaje.create({
                imagen,
                nombre,
                edad,
                peso,
                historia
            }, {
                fields: ['imagen', 'nombre', 'edad', 'peso', 'historia']
            });
            if (nuevoPersonaje) {
                return res.status(200).json({
                    message: 'Personaje creado correctamente!',
                    data: nuevoPersonaje
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

    modificarPersonaje: async (req, res) => {
        const { id } = req.params;
        const { imagen, nombre, edad, peso, historia } = req.body;
        try {
            const personajes = await Personaje.findAll({
                attributes: ['id', 'imagen', 'nombre', 'edad', 'peso', 'historia'],
                where: {
                    id
                }
            });
            if(personajes.length > 0) {
                personajes.forEach(async personaje => {
                    await personaje.update({
                        imagen,
                        nombre,
                        edad,
                        peso,
                        historia
                    });
                });
            }
            return res.status(200).json({
                message: 'Personaje modificado correctamente!',
                data: personajes
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ha ocurrido un error',
                data: {}
            });
        }

    },

    eliminarPersonaje: async (req, res) => {
        try {
            const { id } = req.params;
            const borrarRow = await Personaje.destroy({
                where: { id }
            });
            res.status(200).json({
                message: 'Personaje eliminado correctamente!',
                count: borrarRow
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ha ocurrido un error',
                data: {}
            });
        }
    }
}