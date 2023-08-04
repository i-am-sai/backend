const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect("mongodb+srv://User:a3U7dL9QyxAmaIC7@cfb.zzzj550.mongodb.net/CFB?retryWrites=true&w=majority");
// process.env.MONGO_URL
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { connection }