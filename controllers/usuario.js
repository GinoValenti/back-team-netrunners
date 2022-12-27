const bcryptjs = require('bcryptjs') 
const crypto = require('crypto')
const User = require('../models/User')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, userSignedOutResponse } = require('./responses')


const controller = {

    readUsers : async(req,res,next) => {
        let query = {}
        


        try {
            let allusers = await User.find(query)
                if (allusers) {
                    res.status(200).json({
                        response : allusers,
                        success: true,
                        message: "Se obtuvieron usuarios"
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: "No hay usuarios"
                    })
                }
        } catch(error) {
            next(error)
        }

    },
    
    register : async(req,res,next) => {

 

        let { name, lastname, email, password } = req.body
let role="user"
let photo="https://startupheretoronto.com/wp-content/uploads/2019/03/default-user-image-2.png"
        let verified = true
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')

        password = bcryptjs.hashSync(password,10) 

        try {

            await User.create({ name, lastname, email, password, photo , role, verified, logged, code })
      
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)

        } catch (error) {
            next(error)
        }
    },
    
    verified: async (req, res, next) => {

        const { code } = req.params
        console.log(code)
        try {
            
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                user.verified = true
                await user.save()
                res.redirect('https://mytinerary-netrunners.vercel.app')
            }
            return userNotFoundResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    logOut : async (req, res, next) => {
        
        const { email } = req.user
        console.log(email)

        try {
           
            await User.findOneAndUpdate({email}, {logged: false}, {new: true})
            
            return userSignedOutResponse(req,res)
        } catch (error) {
            next(error)
        }

    }
 
}

module.exports = controller