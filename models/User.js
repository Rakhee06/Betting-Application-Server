const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var UserSchema = new Schema({
    username:{
        type: String,
        require : true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
});

UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, 12);
};
UserSchema.methods.comparePassword = function(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword);
};
module.exports = User = mongoose.model("User", UserSchema);