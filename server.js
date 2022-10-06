const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const server = express();
let port = 3500;
const url = "mongodb://127.0.0.1:27017/paisesyc";
const routes = require('./Routes/index.js');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


const main = async()=>{
    
    //Routes/index.js

    server.use('/api', routes);
    
    const DatabaseC = async()=>{
       
            const client = await mongoose.connect(url).then(()=>{
                console.log("connected to MongoDB")
            }).catch(error=>{console.error(error)})
            
            
    console.log("connected");
        
      
          
        
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
