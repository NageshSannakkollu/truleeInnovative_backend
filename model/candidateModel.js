const { default: mongoose } = require("mongoose");


const CandidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"],
        required:true
    },
    experience:{
        type:String,
        enum:[1,2,3,4,5],
        required:true
    },
    skills:[{
        type:String,
    }],
    qualification:{
        type:String,
        required:true
    }
    
},{timestamps:true})


const CandidateModel = mongoose.models.candidate || mongoose.model("candidate",CandidateSchema)

module.exports = CandidateModel;