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
  };
  module.exports = controller;
  