const mustSignInResponse = require('../controllers/responses')

function mustSignIn(req, res, next) {
    if(req.user) {
        return next();
    }

    return mustSignInResponse()
}

module.exports = mustSignIn