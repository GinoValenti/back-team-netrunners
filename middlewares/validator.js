// Este tipo de middleware se abre con corchetes
// pues no depende solo de req, res, next. Depende de datos ajenos a la estructura convencional
// de un middleware

const validator = ( schema ) => [
    (req,res,next) => {
        const data = schema.validate(req.body , {abortEarly:false})
        // Valido/comparo el schema de validacion con el objeto que viene en el req.body
        // abortEarly en false valida todos los campos JUNTOS y me devuelve un array con todos los errores de validacion
        // en true valida individualmente
        // validate nos devuelve un objeto con propiedades, alguna de ellas tiene un array con todos los errores
        // el objeto que esta en data tiene una propiedad "error" con todos los detalles de los errores de validacion
       console.log(data)
       console.log(data.error)
       console.log(data.error.details);;
        if (data.error) {
            return res.status(400).json({
                success: false,
                message: data.error.details
                // data.error.details es el array con todos los errores 
            })
        }
        next()
    }
]

module.exports = validator