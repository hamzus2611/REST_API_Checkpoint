const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    FullName: String,
    Email: String,
    Phone:String,
    
});
module.exports=mongoose.model('User',userSchema);