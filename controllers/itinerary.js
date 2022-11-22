const Itinerary = require("../models/Itinerary")
const { query } = require("express");

const controller = {

  read: async (req, res) => {
    let query = {};
    if (req.query.userId) {
      query = {
        ...query,
        userId: req.query.userId,
      };
    }
    if (req.query.name) {
      query = {
        ...query,
        title: { $regex: req.query.name, $options: "i" },
      };
    }
    try {
      let itineraries = await Itinerary.find(query).populate("userId", [
        "name",
        "photo",
      ])
      if (itineraries.length>0) {
        res.status(200).json({
          itineraries,
          success: true,
          message: "itineraries were successfully found",
          });
      } else {
        res.status(404).json({
          success: false,
          message: "No itinerary was found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
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
      create: async (requerimiento, respuesta) => {
        try {
          let new_itinerary = await Itinerary.create(requerimiento.body);
    
          respuesta.status(201).json({
            id : new_itinerary._id,
            success: true,
            message: "El itinerary se creo correctamente",
          });
        } catch (error) {
          console.log(error.message);
          respuesta.status(400).json({
            success: false,
            message: error.message,
          });
        }
      },
      update: async (req,res) => {

        let { id } = req.params
     
        try {
            let one = await Itinerary.findOneAndUpdate({ _id: id }, req.body, {new: true})
            if (one) {
              res.status(200).json({
                id: one._id,
                success: true,
                message: "A itinerary has been modified",
              })
            } else {
              res.status(404).json({
                success: false,
                message: "Itinerary wasn't found",
              })
            }
    
        } catch (error) {
            res.status(400).json({
              success: false,
              message: error.message
            })
        }
      },
      destroy: async(req,res) => {

        let { id } = req.params
     
        try {
            let one = await Itinerary.findOneAndDelete({ _id: id })
            if (one) {
              res.status(200).json({
                id: one._id,
                success: true,
                message: "A itinerary has been deleted",
              })
            } else {
              res.status(404).json({
                success: false,
                message: "Itinerary wasn't found",
              })
            }
    
        } catch (error) {
            res.status(400).json({
              success: false,
              message: error.message
            })
        }
      }
}

module.exports = controller;