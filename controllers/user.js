const Usuario = require('../models/User')
const bcryptjs = require('bcryptjs') 
const crypto = require('crypto')
const accountVerificationEmail = require('./accountVerificationEmail')
const { invalidCredentialsResponse, userSignedOutResponse } = require('./responses')
const jwt = require('jsonwebtoken')


const controller = { 
    ingresar: async (req, res, next) => {
        const { password } = req.body;
        const {user} = req;


        try {
            const verificarContraseña = bcryptjs.compareSync(password, user.password)

            if(verificarContraseña) {
                const userDb = await Usuario.findOneAndUpdate({_id: user.id}, {logged: true}, {new: true})
                const token = jwt.sign(
                    {id: userDb._id, name: userDb.name, photo: userDb.photo, logged: userDb.logged},
                    process.env.KEY_JWT,
                    {expiresIn: 60 * 60 * 24}
                )

                return res.status(200).json({
                    response: {user, token},
                    success: true,
                    message: 'Welcome ' + user.name
                })
            }

            return invalidCredentialsResponse(req, res)

        } catch (error) {
            next(error)
        }
    },
    ingresarConToken: async (req, res, next) => {

    
        let {user} = req
        try {
            return res.json({
                response: {
                    user: {
                        id:user.id,
                        name: user.name,
                        photo: user.photo,
                        role: user.role
                    },
                },
                success: true,
                message: 'Welcome ' + user.name
            })
        } catch (error) {
            next(error)
        }
    },
    one: async(req,res) => { 
        let { id } = req.params
        try {
            let user = await Usuario.find({ _id: id })
            if (user) {
                res.status(200).json({
                 user,
                    success: true,
                    message: "A user has been found"
                })
            }           
        } catch(error) {
            res.status(400).json({
                success: false,
                message:"What are you searching bro?!!!"
            })
        }        
    },
    update: async(req,res)=>{
        let {id} = req.params
        try {
          let uno = await Usuario.findOneAndUpdate({_id: id},req.body,{new:true})
      if(uno){
        res.status(200).json({
          id: uno._id,
          success: true,
          message: "el usuario se modifico satisfactoriamente"
        })
      }else{
        res.status(404).json({
          success: false,
          message: "el usuario no se encontro"
        })
      }
        } catch (error) {
          res.status(400).json({
            success:false,
            menssage:error.message
          })
      
        }
      },
   

}

module.exports = controller