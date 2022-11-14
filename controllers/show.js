const { query } = require("express");
const Show = require("../models/Show");

const controller = {
    readOne: async (req, res) => {
      let query = {};
      if (req.query.hotelId) {
        query = {query,
            hotelId: req.query.hotelId,
        };
      }
      try {
        let show = await Show.find(query)
        if (show) {
          res.status(200).json({
            show,
            success: true,
            message: "shows are here",
          });
        }
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    },
    create: async(req,respuesta) => { 

      try {
          let new_show = await Show.create(req.body)
          respuesta.status(201).json({
              id: new_show._id,
              success: true,
              message: "el show se creó satisfactoriamente"
          })
      } catch(error) {
          respuesta.status(400).json({
              success: false,
              message: error.message
          })
      }
  },




  };
  module.exports = controller;
  