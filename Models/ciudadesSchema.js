const mongoose = require("mongoose");


const schema = mongoose.Schema;

const CiudadSchema = new schema({
nombre:{required:true,type:String},
poblacion:{required:true,type:Number},
})

module.exports = mongoose.model("Ciudad",CiudadSchema);
