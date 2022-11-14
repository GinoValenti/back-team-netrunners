const { query } = require("express");
const City = require("../models/City");

const controller = {
  create: async (requerimiento, respuesta) => {
    try {
      let new_City = await City.create(requerimiento.body);

      respuesta.status(201).json({
        id: new_City._id,
        success: true,
        message: "La ciudad se creó satisfactoriamente",
      });
    } catch (error) {
      console.log(error.message);
      respuesta.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    if (req.query.continent) {
      query = {
        ...query,
        continent: req.query.continent,
      };
    }
    if (req.query.title) {
      query = {
        ...query,
        title: { $regex: req.query.title, $options: "i" },
      };
    }
    try {
      let allcities = await City.find(query).populate("userId")
      if (allcities) {
        res.status(200).json({
          allcities,
          success: true,
          message: "Cities were successfully found",
          });
      } else {
        res.status(404).json({
          success: false,
          message: "No city was found",
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
    let { id } = req.params;
    try {
      let city = await City.find({_id: id})
      if (city) {
        res.status(200).json({
          city,
          success: true,
          message: "This city has itineraries",
        })
      }
    } catch(error){
      res.status(400).json({
        succes: false,
        message: error.message
      })
    }
  },
 
  update: async(req,res) => {

    let { id } = req.params
 
    try {
        let one = await City.findOneAndUpdate({ _id: id }, req.body, {new: true})
        if (one) {
          res.status(200).json({
            id: one._id,
            success: true,
            message: "A city has been modified",
          })
        } else {
          res.status(404).json({
            success: false,
            message: "City wasn't found",
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
        let one = await City.findOneAndDelete({ _id: id })
        if (one) {
          res.status(200).json({
            id: one._id,
            success: true,
            message: "A city has been deleted",
          })
        } else {
          res.status(404).json({
            success: false,
            message: "City wasn't found",
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