const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    // user_id:{
    //     type: String,
    //     required: false,
    // },    
    name:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
    },
    password:{
        type: String,
        required: false,
    },
    confirmPassword:{
        type: String,
        required: false,
    }
    // phone:{
    //     type: String,
    //     required: false,
    // },
    
    
})

const USER = mongo.model('user',userSchema)

module.exports = USER;