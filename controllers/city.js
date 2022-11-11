const City = require('../models/City')

const controller = {

    create: async(req, res) => {
        try {
            let new_city = await City.create(req.body)
            res.status(201).json({
                id: new_city._id,
                success : true,
                message : 'A city has been created'
            })
        } catch (error) {
            res.status(400).json({
                success : false,
                message: error.message
            })
        }
    },
/* 
    read: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    },

    update: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    },

    destroy: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
 */

}

module.exports = controller