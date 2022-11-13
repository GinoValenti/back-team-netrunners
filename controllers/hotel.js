const Hotel = require('../models/Hotel')
const { query } = require("express");
const controller = {
    
    create: async(req,respuesta) => { 

        try {
            let new_hotel = await Hotel.create(req.body)
            respuesta.status(201).json({
                id: new_hotel._id,
                success: true,
                message: "el hotel se creó satisfactoriamente"
            })
        } catch(error) {
            respuesta.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
read: async(req, res) =>{
    let query = {}
    let order = {}
 
    if (req.query.order) {
        order = { capacity: req.query.order }
    }

      if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }
    try {
      let allhotels = await Hotel.find(query).sort(order);
      if (allhotels) {
        res.status(200).json({
            allhotels,
          success: true,
          message: "Hotels were successfully found",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No hotel was found",
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