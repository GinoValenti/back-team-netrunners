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
    read: async(req, res) =>{
      let query = {}
     
   
      if (req.query.userId) {
        query = {
          ...query,
          userId: req.query.userId,
        };
      }
    
  
      try {
        let show = await Show.find(query);
        if (show) {
          res.status(200).json({
         show,
            success: true,
            message: "Hotels were successfully found",
          })
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
  update: async(req,res)=>{
    let {id} = req.params
    try {
      let uno = await Show.findOneAndUpdate({_id: id},req.body,{new:true})
  if(uno){
    res.status(200).json({
      id: uno._id,
      success: true,
      message: "el show se modifico satisfactoriamente"
    })
  }else{
    res.status(404).json({
      success: fals,
      message: "el hotel no se encontro"
    })
  }
    } catch (error) {
      res.status(400).json({
        success:false,
        menssage:error.message
      })
  
    }
  },
  deleted: async(req,res)=>{
    let {id} = req.params
    try {
      let uno = await Show.findOneAndDelete({_id: id})
  if(uno){
    res.status(200).json({
      id: uno._id,
      success: true,
      message: "el show se elimino satisfactoriamente"
    })
  }else{
    res.status(404).json({
      success: fals,
      message: "el hotel no se encontro"
    })
  }
    } catch (error) {
      res.status(400).json({
        success:false,
        menssage:error.message
      })
  
    }
  }








  };
  module.exports = controller;
  