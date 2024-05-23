const MediaAudioVideo = require('../models/mediaAudioVideoModels');

const multer =require('multer')
const path = require('path')
const fs = require("fs");

exports.AddMediaAudioVideo= async(req,res)=>{
    try {
        const image = req.files;
        const imagePath = `./image/${image[0].filename}`;
        const extension = imagePath.split('.').pop().toLowerCase();
        let MediaType = "";
    
        // Check if it's a video or audio file based on extension
        if (extension === 'mp3' || extension === 'wav' || extension === 'ogg') {
            MediaType = "audio/mp3";
        } else if (extension === 'mp4' || extension === 'mov' || extension === 'avi') {
            MediaType = 'video/mp4';
        } else {
            // Unsupported file type
            throw new Error('Unsupported file type');
        }
    
        // Read the image file asynchronously
        const imageBuffer = await fs.promises.readFile(imagePath);
    
        // Convert the image buffer to a data URI
        const dataURI = `data:${MediaType};base64,${imageBuffer.toString("base64")}`;
        const data = {
            BlogId: req.body.BlogId,
            MediaUrl: dataURI
        };
    
        // Create new entry in the database
        const newData = await MediaAudioVideo.create(data);
        res.status(200).json(newData);
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
        const acceptableExtensions = ['mp3', 'wav', 'ogg', 'mp4', 'avi', 'mov', 'mkv']
        if (!(acceptableExtensions.some(extension => 
            path.extname(file.originalname).toLowerCase() === `.${extension}`)
        )) {
            return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
        }
        callback(null, true)
    }
}).any()

exports.GetAllMediaAudioVideo = async (req, res) => {
    try {
      // Query the database to find records where Approved is false
      const data = await MediaAudioVideo.find();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
};
  


exports.GetMediaAudioVideo= async (req,res)=>{
    try {
        const{id}=req.params
        const data = await MediaAudioVideo.findOne({ BlogId: id });
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.UpdateSingleMediaAudioVideo=async (req,res)=>{
    try {
        

        const{id}=req.params
        const data=await MediaAudioVideo.findByIdAndUpdate(id,req.body)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.DeleteSingleMediaAudioVideo= async(req,res)=>{
    try {
        

        const{id}=req.params
        const data=await MediaAudioVideo.findByIdAndDelete(id)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}