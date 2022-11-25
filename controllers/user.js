const Usuario = require('../models/User')
const bcryptjs = require('bcryptjs') 
const crypto = require('crypto')
const accountVerificationEmail = require('./accountVerificationEmail')
const { invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')
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
    
    salir: async (req, res, next) => {
      
        const { id } = req.user
        
        try {
            await Usuario.findOneAndUpdate({_id: id}, {logged: false})

            return userSignedOutResponse(req, res)
        } catch (error) {
            next(error)
        }
    }

   

}

module.exports = controller