const mongoose=require('mongoose')

const userSchema= mongoose.Schema (
    {
        
        Name: {
            type : String,
            require: true
         }, 
        Email: {
            type : String,
            require: true
         }, 
        ProfileUrl: {
            type : String,
            require: true
         }, 
         isAdmin: {
            type : Boolean,
            require: true,
            default:false
         }, 
    },
    {
        timestamps: true
    }
)

const user=mongoose.model('user',userSchema)

module.exports = user