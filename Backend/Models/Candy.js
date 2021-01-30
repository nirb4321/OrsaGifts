const mongoose = require ("mongoose");

const CandySchema =  mongoose.Schema({
    Candyid : {
        type : String,
        required : true
    },
    CandyName : {
        type : String,
        required : true
    },
    CandyPrice : {
        type : String,
        required : true
    },

});

module.exports = mongoose.model('Candy',CandySchema)

