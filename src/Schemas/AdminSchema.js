const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: Number,
        required: true
    }
});

const AdminUser = mongoose.model('adminSchema', adminSchema);
module.exports = AdminUser;
