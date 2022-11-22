
const errorHandler = (error,_req,res,_next)=>{
    console.error("there was an error:",error.message)
    res.status(400).json({
        success:false,
        message:error.message
    })
}
