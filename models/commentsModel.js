const mongoose=require('mongoose')

const commentSchema= mongoose.Schema (
    {
        
        UserId: {
            type : String,
            require: true
         }, 
        BlogId: {
            type : String,
            require: true
         },
        WriteUp: {
            type : String,
            require: true
         },
    },
    {
        timestamps: true
    }
)

const comment=mongoose.model('comment',commentSchema)

module.exports = comment