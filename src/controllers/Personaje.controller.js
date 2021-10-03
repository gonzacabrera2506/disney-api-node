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
    }
}