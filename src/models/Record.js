
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
 amount:Number,
 type:String,
 category:String,
 date:String
});

module.exports = mongoose.model("Record", schema);
