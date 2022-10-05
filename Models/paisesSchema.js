const mongoose = require('mongoose');

const schema = mongoose.Schema;

const PaisSchema = new schema({
nombre:{required:true,type:String},
poblacion:{required:true,type:Number},
capital:{required:true,type:String},
codigot:{required:true,type:Number},
codigoA:{required:true,type:String}
});

module.exports = mongoose.model("Pais",PaisSchema);
