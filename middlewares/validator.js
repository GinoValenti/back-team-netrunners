const validator = (schema) => [
    (req,res,next)=>{
        const data = schema.validate(req.body, {abortEarly:false} ) 
       if(data.error){
        return res.json({
            success:false,
            message:data.error.details.map(error=>error.message)
        })
       }
        next()//next pasa al create
    }

]
module.exports = validator
//abortEarly en false valida todos los campos JUNTOS y me devuelve un unico array 
//con todos los errores de validacion 
//en true valida individualmente