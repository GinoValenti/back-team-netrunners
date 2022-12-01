const { res } = require("express")
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

    },

    postReactions : async (req, res) => {

        let query = {}

        let user = req.user.id


        console.log(user)

        if (req.query.name) {
            query = { ...query, name: req.query.name}
        }

        if (req.query.itineraryId) {
            query = { ...query, itineraryId: req.query.itineraryId}
        }

        try {
            let reactionItinerary = await Reaction.findOne(query)
            console.log(reactionItinerary._id);
            if (reactionItinerary.userId.includes(user)){
                await Reaction.findOneAndUpdate({_id: reactionItinerary._id},{$pull:{userId:user}},{new:true})
                res.status(200).json({
                    success:true,
                    message: "Reaction has been modified by pull"
                })
            } else {
                await Reaction.findOneAndUpdate({_id: reactionItinerary._id},{$push:{userId:user}},{new:true})
                res.status(200).json({
                    success:true,
                    message: "Reaction has been modified by push"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message,
                
            })
        }
        
    },
    read: async(req,res)=>{
        let query = {};
        if (req.query.itineraryId) {
          query = {
             ...query,
             itineraryId: req.query.itineraryId,
          };
        }
        try {
          let reactions = await Reaction.find(query)
    
          if (reactions.length>0) {
            res.status(200).json({
              reactions,
              success: true,
              message: "reactions were successfully found",
            });
          } else {
            res.status(404).json({
              success: false,
              message: "No reactions was found",
            });
          }
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      }
}



module.exports = controller