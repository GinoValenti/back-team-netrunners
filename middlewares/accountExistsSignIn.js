const Usuario = require("../models/User");
const { invalidCredentialsResponse } = require("../controllers/responses")

async function accountExistsSignIn(req, res, next) {
    const user = await Usuario.findOne({email: req.body.email})
    if (user) {
        req.user = user
        return next()
    }
  return  invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn
