const express = require("express");
const mongoose = require("mongoose");
const Candy = require("../Models/Candy")
const router = express.Router();


router.get("/", async (req,res)=>{
    try{
        const allCandies = await Candy.find()
        res.json(allCandies)
    } catch(err){
        res.json({message :err})
    }
    });

router.post('/new', async (req,res)=>{
    console.log(req.body)
    const  newCandy = new Candy({
        Candyid: req.body.Candyid,
        CandyName: req.body.CandyName,
        CandyPrice: req.body.CandyPrice
    });
    try{
    const savedCandy = await newCandy.save()
    res.json(savedCandy);
    } catch(err){
        res.json({message :err})
    }
    });



module.exports= router;
