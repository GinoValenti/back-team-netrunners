const Hotel = require('../models/Show')
const { query } = require("express");
const controller = {
    
   
    
        
        
        
      
       
  one: async(req,res) => { 
    let { id } = req.params
    try {
        let show = await Show.find()
        if (show) {
            res.status(200).json({
             show,
                success: true,
                message: "A hotel has been found"
            })
        }           
    } catch(error) {
        res.status(400).json({
            success: false,
            message:"What are you searching bro?!!!"
        })
    }        
}}



    module.exports = controller