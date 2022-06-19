const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const AdminUser = require("./Schema/AdminSchema");
const jwt=require("jsonwebtoken");
const UserSchema = require("./Schema/UserSchema");

const app = express();

//Keep these two in .env file and access from there.
const mongoUrl = "mongodb+srv://prasath-rk:!Passw0rd@cluster0.jhueh.mongodb.net/database?retryWrites=true&w=majority";
const JWT_sec = "prasathIsAPlayBoy"; //JWT tkn secret hash code.

mongoose.connect(mongoUrl, () => {
    console.log("Mongo Connected");
    app.listen(5500, () => {
        console.log("Server initiated at http://localhost:5500")
    });
});


//MiddleWares
app.use(cors());
app.use(express.json());
//Admin Login endpoint.
app.post('/api/adminLogin', async (req, resp) => {
    const { username, pwd } = req.body;
    const usr_chk = await AdminUser.findOne({username});

    if (!usr_chk) {
        resp.status(200).json({ message: "Admin not found" });
    }

    const token = jwt.sign({ id: usr_chk._id, username: usr_chk.username }, JWT_sec);

    if (usr_chk.pwd === pwd) {
        resp.status(400).json({ tkn:token, message: "Login Success" });
    }
    else {
        resp.status(200).json({ message: "Admin Credentials wrong" });
    }
})


//Admin adding the user.
app.post('/api/addUser', async (req, resp) => {
    const { username, pwd, tkn } = req.body;
    const tok2usr = jwt.verify(tkn, JWT_sec);
    const usr_admin = tok2usr.username;

    //Check Admin and create account for users.
    const usr_chk = await AdminUser.findOne({usr_admin});

    if (!usr_chk) {
        resp.status(200).json({ message: "Admin not found" });
    }

    try {
        const response = await UserSchema.create({
            username,
            pwd
        });

    } catch (error) {
        const err_msg = JSON.stringify(error);
        console.log(err_msg);
        if (error.code == "11000") {
            return resp.json({
                status: "error",
                error: "An user already exists with these details"
            })
        }
    }
    resp.status(400).json({ message: "Account Created" });


});


//Admin adding a task for the users.
app.post('/api/addTaskToUser', async (req, resp) => {
    const { username, task, tkn } = req.body;
    const tok2usr = jwt.verify(tkn, JWT_sec);
    const usr_admin = tok2usr.username;

    //Check Admin and create account for users.
    const admin_chk = await AdminUser.findOne({usr_admin});

    if (!admin_chk) {
        resp.status(200).json({ message: "Admin not found" });
    }

    const usr_chk = await UserSchema.findOne({ username });

    if(usr_chk){
        usr_chk.tasks.push(task);
        usr_chk.save();
    }

    else{
        resp.status(200).json({ message: "Some Internal Issue" });
    }
    
    
    resp.status(400).json({ message: "Task Added Succesfully" });

});