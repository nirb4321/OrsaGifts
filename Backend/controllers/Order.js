const express = require("express");
const mongoose = require("mongoose");
const Order = require("../Models/Order");
const router = express.Router();

//Get all Orders
router.get("/all",async (req,res)=>{
    try{
        const orders = await Order.find();
        res.json(orders)
    } catch(err){
        res.json({message:err});
    }
})

//Creat new order
router.post('/new', async (req,res)=>{
    console.log(req.body)
    const  newOrder = new Order({
        Date: req.body.Date,
        price: req.body.price,
        PhoneNumber: req.body.PhoneNumber,
        Description: req.body.Description,
        Colors: req.body.Colors,
        Name: req.body.Name,
        Address: req.body.Address,
        Time: req.body.Time,
        Comments: req.body.Comments
    });
    try{
    const savedOrder = await newOrder.save()
    res.json(savedOrder);
    } catch(err){
        res.json({message :err})
    }});

//Delete order by id
router.delete('/delete/:postId',async(req,res)=> {
try{
    const removedOrder = await Order.deleteOne({_id: req.params.postId});
    res.json(removedOrder);
} catch (err){
    res.json({message:err});
}}); 

//Update order by id
router.patch('update/:postId', async (req,res)=>{
    try{
        const updatedOrder= await Order.updateOne(
            {_id:req.params.postId},
            {$set: {Date: req.body.Date,
                    price: req.body.price,
                    PhoneNumber: req.body.PhoneNumber,
                    Description: req.body.Description,
                    Colors: req.body.Colors,
                    Name: req.body.Name,
                    Address: req.body.Address,
                    Time: req.body.Time,
                    Comments: req.body.Comments}}
        );
        res.json(updatedOrder)
    } catch(err){
        res.json({message:err});  
    }

})


module.exports= router;
