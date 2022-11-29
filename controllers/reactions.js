const Reaction = require("../models/Reaction")

const controller = {
    create: async (req, res) => {

        try {
            let reaction = await Reaction.create(req.body)

            res.status(201).json({
                id: reaction._id,
                success: true,
                message: "Se creo una reaccion"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: error.message
            })
        }

    }
}

module.exports = controller