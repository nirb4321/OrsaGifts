const mongoose = require ("mongoose");

const OrderSchema =  mongoose.Schema({
   
    Date:{
        type: Date,
    },
    price :{
        type: String,
    },
    PhoneNumber:{
        type: String,
    },
    Description:{
        type:String
    },
    Colors:{
        type:String
    },
    Name:{
        type:String
    },
    Address:{
        type:String
    },
    Time:{
        type:String
    },
    Comments:{
        type:String
    }
});

module.exports = mongoose.model('Order',OrderSchema)