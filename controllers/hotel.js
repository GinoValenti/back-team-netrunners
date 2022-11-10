const Hotel = require('../models/Hotel')

const controller = {
    
    create: async(requerimiento,respuesta) => { //método para crear un documento USUARIO
        try {
            let new_hotel = await Hotel.create(requerimiento.body)
            respuesta.status(201).json({
                id: new_hotel._id,
                success: true,
                message: "el hotel se creó satisfactoriamente"
            })
        } catch(error) {
            respuesta.status(400).json({
                success: false,
                message: error.message
            })
        }
    }}
    module.exports = controller