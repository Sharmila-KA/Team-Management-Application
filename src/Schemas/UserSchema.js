const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    },
    tasks: [{
        type: String
    }]
});

const UserSchema = mongoose.model('userSchema', userSchema);
module.exports = UserSchema;
