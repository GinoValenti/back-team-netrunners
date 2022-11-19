const errorHandler = (error, req, res, next) => {
    console.log(`There was an error: `, error.message)
    res.status(400).json({
        success: false,
        message: error.message
    })
}

module.exports = errorHandler