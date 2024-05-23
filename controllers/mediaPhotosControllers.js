const MediaPhotos = require('../models/mediaPhotosModel');

const multer =require('multer')
const path = require('path')
const fs = require("fs");

exports.AddMediaPhotos= async(req,res)=>{
    try {
         
        const image=req.files
         const imagePath = `./image/${image[0].filename}`;
         // Read the image file
         const imageBuffer = fs.readFileSync(imagePath);
         
         // Convert the image buffer to a data URI
         const dataURI = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
         const data={
           
            BlogId:req.body.BlogId,
            MediaUrl:dataURI
            }
            
            var newData = await MediaPhotos.create(data)
         res.status(200).json(newData)
      
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}
const fileStorage=multer.diskStorage({
    destination: (req,file,cd) =>{
        cd(null,'image')
    },
    filename: (req, file, cd)=>{
        cd(null,Date.now() + path.extname(file.originalname))
    }
})
exports.uplaod=multer({
    storage:fileStorage,
     limits:{fileSize: '10000000'},
    fileFilter: (req, file, callback) => {
        const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg']
        if (!(acceptableExtensions.some(extension => 
            path.extname(file.originalname).toLowerCase() === `.${extension}`)
        )) {
            return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
        }
        callback(null, true)
    }
}).any()

exports.GetAllMediaPhotos = async (req, res) => {
    try {
      // Query the database to find records where Approved is false
      const data = await MediaPhotos.find();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
};
  


exports.GetMediaPhotos= async (req,res)=>{
    try {
        const{id}=req.params
        const data = await MediaPhotos.find({ BlogId: id });
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.UpdateSingleMediaPhotos=async (req,res)=>{
    try {
        

        const{id}=req.params
        const data=await MediaPhotos.findByIdAndUpdate(id,req.body)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.DeleteSingleMediaPhotos= async(req,res)=>{
    try {
        

        const{id}=req.params
        const data=await MediaPhotos.findByIdAndDelete(id)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}