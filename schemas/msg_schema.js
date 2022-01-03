const mongoose = require('mongoose');

const msg_schema = new mongoose.Schema({
    username : mongoose.SchemaTypes.String,
    discordId : {
        type : mongoose.SchemaTypes.String,
        required : true
    },
    message : mongoose.SchemaTypes.String
});


module.exports = mongoose.model("user" , msg_schema);