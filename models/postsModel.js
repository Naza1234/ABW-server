const mongoose=require('mongoose')

const postSchema= mongoose.Schema (
    {
        
        Title: {
            type : String,
            require: true
         }, 
        WriteUp: {
            type : String,
            require: true
         },
        Cart: {
            type : String,
            require: true
         },
    },
    {
        timestamps: true
    }
)

const post=mongoose.model('post',postSchema)

module.exports = post