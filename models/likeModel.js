const mongoose=require('mongoose')

const likeSchema= mongoose.Schema (
    {
        
        UserId: {
            type : String,
            require: true
         }, 
        BlogId: {
            type : String,
            require: true
         },
    },
    {
        timestamps: true
    }
)

const like=mongoose.model('like',likeSchema)

module.exports = like