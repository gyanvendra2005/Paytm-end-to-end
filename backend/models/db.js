const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://paytm:paytm1234@cluster0.0fogi.mongodb.net")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        password: {
            type: String,
            required: true   
        },
        email: {
            type: String,
            required: true
        },
        mobileno: {
            type: String,
            required:true,
        }
    }
)
  
const User = mongoose.model("User",UserSchema)

module.exports = {
    User,
}