const express = require('express')
const router = express.Router()
const {registerCandidate,getAllCandidates} = require("../controller/candidateCtrl")

router.post("/register",registerCandidate)
router.get("/all_candidates",getAllCandidates)

module.exports =router;