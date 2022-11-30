const Comments = require ("../models/Comment")
const { query } = require("express");
const controller = {

read : async(req,res)=>{
   

    let query = {}
    if (req.query.showId) {
        query = {
          ...query,
          showId: req.query.showId,
        };
      }
 
    try {

       let allcomments = await Comments.find(query)
       if(allcomments){
        res.status(200).json({
            allcomments,
            success:true,
            message:"   Comments were successfully found"
        })
       }else{
        res.status(404).json({
            success: false,
            message: "No comment was found",
          })
       }




    } catch (error) {
        console.log(error);
    }



},
create:  async(req,respuesta) => { 

    try {
        let new_comment = await Comments.create(req.body)
        respuesta.status(201).json({
            id: new_comment._id,
            success: true,
            new_comment,
            message: "el comentario se creó satisfactoriamente"
        })
    } catch(error) {
        respuesta.status(400).json({
            success: false,
            message: error.message
        })
    }
},




}


module.exports = controller