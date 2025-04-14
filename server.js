const express = require('express');
const app = express()
const cors = require('cors');
const PORT = 3029 || process.env.PORT; 
const candidateDetails =require("./routes/candidateRoute")
app.use(cors());
app.use(express.json())

app.use("/api/",candidateDetails)

app.listen(PORT,(() => {
    console.log(`Server Running at: http://localhost:${PORT}`)
}))