const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 25,
        unique: true,
    },
    email:{
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        min: 8,
    },
    profilePicture:{
        type: String,
        default: "",
    },
    coverPicture:{
        type: String,
        default: "",
    },
    followers:{
        type: Array,
        default: [],
    },
    followings:{
        type: Array,
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    desc:{
        type: String,
        max: 50,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
