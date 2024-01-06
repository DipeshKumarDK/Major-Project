const mongoose = require('mongoose');

const CommentFree = new mongoose.Schema({
    user_name:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true
    },
},
{timestamps:true}); 

module.exports = mongoose.model("FreeComments",CommentFree);