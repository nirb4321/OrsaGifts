const connection = require("./Models")
const express = require("express")
const app = express()
const parh = require("path");
const expressHandlerbar = require("express-handlebars");
const bodyparser = require("body-parser");

//Controllers
const CandiesController = require("./controllers/Candy");
const OrdersController = require("./controllers/Order");
const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://dbAdmin:84n62i13r@nircluster.hxz1c.mongodb.net/Gifts?retryWrites=true&w=majority",
                {useNewUrlParser: true},
                ()=> console.log("Connected to DB")
);
app.use(bodyparser.json());
app.use('/candy',CandiesController);
app.use('/order',OrdersController);


//Listen To Server
app.listen("3000", ()=>{
    console.log("server started");
});