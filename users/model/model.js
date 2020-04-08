const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
        email: { type: String, required: true },
        phoneNo: { type: String, required: true },
        password: { type: String, required: true },
        address: { 
            addressLine:{type:String, required:false},
            city:{type:String, required:false},
            state:{type:String, required:false},
            zipcode:{type:Number, required:false},
        },
        isDeleted: { type: Boolean, required: false }
    },
    {
        timeStamps: true,
    }
)

module.exports = mongoose.model("Users", userSchema)
