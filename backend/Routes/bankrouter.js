const express = require('express');
const bankrouter = express.Router();
// const User = require('../models/db');
const {Bank} = require('../models/db');

bankrouter.post('/updatebalance',async (req,res)=>{
    const Balance= req.body.bankbalance
    await Bank.create({
        // username,
        bankBalance:Balance
    })
    .then((req,res)=>{
        res.status(200).send("Bank Balance Updated Successfully")
    })
    .catch((res,req)=>{
        // res.status(400).send("Not updated")
    })
})

bankrouter.get('/checkbalance', async (req,res)=>{
    const username= req.body.username
    const user = await User.findOne({
        username
    })
    if(user){
        const Balance = user.bankBalance;
        return res.json({
            Balance:Balance
        })
    }
    else{
        return res.json({
            message:"User not exist"
        })
    }

})

module.exports =  bankrouter;

