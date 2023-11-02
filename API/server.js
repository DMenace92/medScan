const express = require("express")

const app = express();
const scanner = require('./Routes/scanner')
const PORT = process.env.PORT||9000;
app.use(scanner)

app.listen(PORT,()=>{
    console.log(`App is running on port: ${PORT}`)
})