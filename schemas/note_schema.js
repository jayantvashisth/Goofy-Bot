const mongoose = require('mongoose');

const note_schema = new mongoose.Schema({
    username : mongoose.SchemaTypes.String,
    discordId : {
        type : mongoose.SchemaTypes.String,
        required : true
    },
    hint : mongoose.SchemaTypes.String,
    description : mongoose.SchemaTypes.String
});


module.exports = mongoose.model("note" , note_schema);