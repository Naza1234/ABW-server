const mongoose=require('mongoose')

const mediaPhotoSchema= mongoose.Schema (
    {
        
        BlogId: {
            type : String,
            require: true
         },
        MediaUrl: {
            type : String,
            require: true
         },
    },
    {
        timestamps: true
    }
)

const mediaPhoto=mongoose.model('mediaPhoto',mediaPhotoSchema)

module.exports = mediaPhoto