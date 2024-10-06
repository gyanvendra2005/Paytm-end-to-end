const express = require('express');
const mainrouter = require('./Routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainrouter)


app.listen('3000',()=>{
   console.log("runnig at 3000");
   
})