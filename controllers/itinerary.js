const Itinerary = require("../models/Itinerary")
const { query } = require("express");

const controller = {
    readOne: async (req, res) => {
      let query = {}
      if (req.query.cityId){
        query = {query,
            cityId: req.query.cityId,
        }
      }
        try {
          let allcities = await Itinerary.find(query).populate('userId')
          if (allcities) {
            res.status(200).json({
              allcities,
              success: true,
              message: "Itineraries were successfully found",
              });
          } else {
            res.status(404).json({
              success: false,
              message: "No itinerary was found for this city",
            });
          }
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      },
}

module.exports = controller;