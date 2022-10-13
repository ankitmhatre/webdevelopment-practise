const express = require('express')
const app = express()
app.use(express.json());
const { MongoClient } = require("mongodb");




  


console.log("starting server");

// create server

app.post('/', async (req, res) => {


    const dbclient = new MongoClient("mongodb://localhost:27017/");

    if(req.body.username !==undefined ){
        const database = dbclient.db("testdb");
        const actualUsers = database.collection("users");
        // Query for a movie that has the title 'The Room'
        const query = { username: req.body.username, password : req.body.password };

        const userResponseFromDatabase = await actualUsers.findOne(query);

        if(userResponseFromDatabase!==null){
            res.json({
                "status" : "success",
                "msg" : "Logged in"
            })
        }else{
            res.json({
                "status" : "fail",
                "msg" : "Incorrect combination"
            })
        }

    }else{

        res.json({
            "status" : "fail",
            "msg" : "Please supply the username"
        })
    }

});





   app.listen(3000);
