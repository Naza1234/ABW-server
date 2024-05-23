const mongoose=require('mongoose')

const mediaAudioVideoSchema= mongoose.Schema (
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

const mediaAudioVideo=mongoose.model('mediaAudioVideo',mediaAudioVideoSchema)

module.exports = mediaAudioVideo