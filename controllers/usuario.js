const bcryptjs = require('bcryptjs') 
const crypto = require('crypto')
const User = require('../models/User')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')


const controller = {
    
    register : async(req,res,next) => {

 

        let { name, lastname, age, email, password, photo, role } = req.body

        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')

        password = bcryptjs.hashSync(password,10) 

        try {

            await User.create({ name, lastname, age, email, password, photo , role, verified, logged, code })
      
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
                res.redirect('http://localhost:3000')
            }
            return userNotFoundResponse(req, res)
        } catch (error) {
            next(error)
        }
    },


}

module.exports = controller