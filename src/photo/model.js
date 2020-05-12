import mongoose from 'mongoose';

const photoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    comment:{
        type:String
    },
    author:{
        type:String,
        required:true
    },
    tagList:{
        type:String
    },
    photoDate:{
        type:Date,
        max:Date.now()
    },
    likeCount:{
        type:Number
    }
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;