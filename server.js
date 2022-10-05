const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const server = express();
let port = 3500;
const url = "mongodb+srv://naranjojose256%40gmail.com:JoseNaranj0!>@cluster0.anb85.mongodb.net/test";
const routes = require('./Routes/index.js');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


const main = ()=>{
    
    //Routes/index.js

    server.use('/api', routes);
    
    const DatabaseC = async()=>{
        try{
            const client = await mongoose.connect(url);
            const db = mongoose.connection;
            db.once('connected',()=>{
                console.log("Conectada")
            })
    
        }
        catch(err){
            console.error(err);
        }
    }
    
    DatabaseC();
    server.listen(port,()=>{
        console.log(`puerto:${port}`);
    
    })
}

try{
    main()
}
catch(err){
    console.error(err);
}
