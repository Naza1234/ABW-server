const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const cors = require('cors');



const corsOptions = {
    origin: '*', // Allow requests from this specific URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/image",express.static("./image"))




    // All Routes in this API

    const UserRouts = require("./routes/userRoutes");
    const PostRouts = require("./routes/postRoutes");
    const CommentsRouts = require("./routes/commentRoutes");
    const LikeRouts = require("./routes/likeRoutes");
    const MediaPhotoRouts = require("./routes/mediaPhotosRoutes");
    const MediaAudioVideoRouts = require("./routes/mediaAudioVideoRoutes");
    






    app.use("/user",UserRouts)  
    app.use("/post",PostRouts)  
    app.use("/comment",CommentsRouts)  
    app.use("/like",LikeRouts)  
    app.use("/mediaPhoto",MediaPhotoRouts)  
    app.use("/mediaAudioVideo",MediaAudioVideoRouts)  
  
   

// data base connection
// Aji9usgrsOmDVlNc
// PRWserver

const url="mongodb+srv://AWDataBase:AWserverDB@cluster0.dmjzpdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const port=3000



mongoose
.connect(url)
.then(()=>{
    console.log('since with database made');
    app.listen(port,()=>{
        console.log(`server is now running on ${port} `);
    })
}).catch((error)=>{
    console.log(error.message);
})
