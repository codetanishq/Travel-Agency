const express = require("express");
const mongoose = require("mongoose");


const User = require("./model/user");



const app = express();

app.use(express.json());
app.use(express.urlencoded());


mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;


db.once("open", () => {
    console.log("connect mongodb database")
})
db.on("Error", (e) => console.log(e));


app.get("/", (req, res) => {
    res.send("Backend Started , That is my first server page");
})
//signUp

app.post("/signin", (req, res) => {
    try {
        console.log(req.body)
        if (req.body.email && req.body.password) {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            user.save();
            res.send("Welcome to your SignUp ");
        } else {
            res.send("Error");
        }
    } catch (error) {
        console.log("Error", error);

    }

});



app.listen(3000, () => console.log("Server started on port 3000"));