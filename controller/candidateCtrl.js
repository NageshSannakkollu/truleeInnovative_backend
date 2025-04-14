const DbConnection = require("../config/database");
const CandidateModel = require("../model/candidateModel");

const registerCandidate = async(req,res) => {
    const {name,phone,imageUrl,email,experience,gender,qualification,skillSet} = req.body;
    const userDetails = {
        name:name,
        phone:phone,
        imageUrl:imageUrl,
        email:email,
        experience:experience,
        gender:gender,
        qualification:qualification,
        skills:skillSet
    }
    console.log("checkUserEmail:",userDetails)
    await DbConnection()
    const checkUserEmail = await CandidateModel.findOne({email:userDetails.email})

    if(checkUserEmail===null){
        await CandidateModel.create(userDetails)
        return res.status(201).send({message:"Candidate registered successfully", success:true})
    }else{
        res.status(200).send({message:"Email already exists",success:false})
    }
}

const getAllCandidates = async(req,res) => {
    await DbConnection()
    try {
        const allCandidates = await CandidateModel.find()
        res.status(200).send(allCandidates)
    } catch (error) {
        console.log(`Error at: ${error.message}`)
    }
}

module.exports = {registerCandidate,getAllCandidates}  