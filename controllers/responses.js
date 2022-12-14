function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed up, next step is to verify your account'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}
function mustBeTheOwner(req, res) {
    return res.status(401).json({
      success: false,
      message: "You must be the owner to carry out this operation",
    });
  }

  function activityNotFound(req, res) {
    return res.status(404).json({
      success: false,
      message: "Couldn't find the activity",
    });
  }

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}

function verifyUser(req, res) {
    return res.status(401).json({
        success: false,
        message: "No reactions of you here",
    });
}

function notFound(req, res) {
    return res.status(404).json({
        success: false,
        message: "Couldn't find the activity",
    });
}

module.exports = {
    userSignedUpResponse,
    mustBeTheOwner,
    activityNotFound,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
    verifyUser,
    notFound
}