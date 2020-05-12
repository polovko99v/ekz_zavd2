import express from "express";
import config from "./config.json";
import mongoose from "mongoose";
import photoRouter from './photo';
import initPhotos from './photo/init';

const connectionUrl = config.db.url+config.db.name;
mongoose.connect (connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
   
    initPhotos.run().then( ()=>{
        console.log(`Database was initialised`);  
    }); 
})
.catch(error=>{console.log(error)});

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/photo", photoRouter);
app.use("*", (req,res)=>{res.send(`Node JS test server`);});

app.listen(config.port);

console.log(`Server started at http://localhost:${config.port}`);