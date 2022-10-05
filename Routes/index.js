const express = require("express");
//import { updateExportDeclaration } from 'typescript';
const ciudadesSchema = require("../Models/ciudadesSchema");
const paisesSchema = require("../Models/paisesSchema");

 const router = express.Router();
//r
router.get("/getciudades",async (req,res)=>{
    try{
        const ciudad = await ciudadesSchema.find();
        res.json(ciudad);
    }
    catch(err){
        console.error(err);
    }
   

});
//c
router.post("/postciudades",(req,res)=>{
    const ciudad = new ciudadesSchema({
        nombre:req.body.nombre,
        poblacion:req.body.poblacion,
    });

    ciudad.save((data,err)=>{
        if(err){
            console.error(err);
        }
        else{
            res.status(200);
            console.log("Datos guardados")
        }
    })

});

//d
router.delete("/deleteciudades/:id",async (req,res)=>{
   try{
    const id = req.params.id;
    const data = await ciudadesSchema.findByIdAndDelete(id);
    res.send("Documento actualizado");

   }
   catch(err){
    res.status(400);
console.error(err);
   }


});
//u
router.patch("/updateciudades",async(req,res)=>{
    try{
        const id = req.params.id;
        const updated = req.body;
        const options = { new: true };
    
        const result = await ciudadesSchema.findByIdAndUpdate(
            id, updated, options
        )
    
        res.send(result);
    
        }catch(err){
            res.status(400)
            console.error(err);
    
        }


});

router.get("/getpaises",async(req,res)=>{
    try{
        const paises = await paisesSchema.find();
        res.json(paises);
    }
    catch(err){
        console.error(err);
    }
});
//c
router.post("/postpaises",(req,res)=>{
    const pais = new paisesSchema({
        nombre:req.body.nombre,
        poblacion:req.body.poblacion,
        capital:req.body.capital,
        codigot:req.body.codigot,
        codigoA:req.body.codigoA,
    });

    pais.save((data,err)=>{
        if(err){
            console.error(err);
        }
        else{
            res.status(200);
            console.log("Datos guardados")
        }
    })

});

//d
router.delete("/deletepaises",async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await paisesSchema.findByIdAndDelete(id);
        res.send("Documento actualizado");
    
       }
       catch(err){
        res.status(400);
    console.error(err);
       }
    
    
    }
);
//u
router.patch("/updatepaises/:id",async(req,res)=>{
    try{
    const id = req.params.id;
    const updated = req.body;
    const options = { new: true };

    const result = await paisesSchema.findByIdAndUpdate(
        id, updateExportDeclaration, options
    )

    res.send(result);

    }catch(err){
        res.status(400)
        console.error(err);

    }
});

module.exports = ("router",router);




