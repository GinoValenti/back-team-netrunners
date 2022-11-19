const Hotel = require('../models/Hotel')
const { query } = require("express");
const controller = {
    
    create: async(req,respuesta) => { 

        try {
            let new_hotel = await Hotel.create(req.body)
            respuesta.status(201).json({
                id: new_hotel._id,
                success: true,
                new_hotel,
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
      if (allhotels.lenght==0) {
        res.status(200).json({
       allhotels,
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
  one: async(req,res) => { 
    let { id } = req.params
    try {
        let hotel = await Hotel.find({ _id: id })
        if (hotel) {
            res.status(200).json({
             hotel,
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
},

update: async(req,res)=>{
  let {id} = req.params
  try {
    let uno = await Hotel.findOneAndUpdate({_id: id},req.body,{new:true})
if(uno){
  res.status(200).json({
    id: uno._id,
    success: true,
    message: "el hotel se modifico satisfactoriamente"
  })
}else{
  res.status(404).json({
    success: false,
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
    let uno = await Hotel.findOneAndDelete({_id: id})
if(uno){
  res.status(200).json({
    id: uno._id,
    success: true,
    message: "el hotel se elimino satisfactoriamente"
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

}


    module.exports = controller