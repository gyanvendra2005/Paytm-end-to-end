const { Double } = require('bson');
const mongoose = require('mongoose');
// const Float = require('mongoose-float').loadType(mongoose);
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
        firstname:{
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
        }
    }
)

const BankSchema = new mongoose.Schema({
    userId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     required:true
    },
    bankBalance: {
        type:mongoose.Types.Decimal128,
        required:true
    }
})
  
const User = mongoose.model("User",UserSchema)
const Bank = mongoose.model("Bank",BankSchema)
module.exports = {
    User,
    Bank
}