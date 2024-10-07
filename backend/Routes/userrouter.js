const express = require('express');
const userrouter = express.Router();
const {User, Bank} = require('../models/db');
const config = require('../config');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const { authMiddleware } = require('../middlewares/authmiddleware');


// signup route
userrouter.post('/signup', async (req,res)=>{
    const username =req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname

    const existuser = await User.findOne({
        $or : [{username},{email}]
        // {username}
    })

    if (existuser){
        return res.status(400).json({message: 'User already exists'})
    }
     else{
        const userdb = await User.create({
            username,
            email,
            firstname,
            lastname,
            password,
       })
        
       const userId = userdb._id

       await Bank.create({
        userId,
        bankBalance: 1 + Math.random() * 10000
    })

       try {
        const token = jwt.sign({
            userId:userdb._id
           },JWT_SECRET)
           res.status(200).json({
            message:"User created",
            token:token
        })
       } catch (error) {
           res.status(404).json({
            message:"user not created"})
       }
     }
})


// signin route
userrouter.post('/signin', (req,res)=>{
    const username =req.body.username;
    const password = req.body.email;
    const lastname = req.body.email;

    const existuser = User.findOne(
       username,
       password
    )

    if (!existuser){
        return res.status(400).json({message: 'User Does not exist'})
    }
    else{
        const token  = jwt.sign({
            userId: existuser._id
        },JWT_SECRET)

        return res.json({
           message:"User logged in",
           token:token
        })
    }
})

// update user
userrouter.put('/update', authMiddleware, async (req, res)=>{
       const body = req.body;
       await User.updateOne(body,{
        id: req.userId
       })
       res.json({
        message:"updated successfully"
       })
})

// search user
userrouter.get('/search',async (req,res)=>{
    const filter = req.query.filter || "";

    const users=await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }},
            {
                lastname:{
                    "$regex":filter
                }
        }]
    })
    res.json({
        user: users.map(user=>({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        })
        )
    })
})

userrouter.get('/balance',authMiddleware, async(req,res)=>{
    const account = await Bank.findOne({
        userId: req.userId
    });
    
    res.json({
        balance: account.bankBalance
    })
})



module.exports = userrouter;