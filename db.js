const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/link")


const Links = new mongoose.Schema({
    originalLink: String,
    shortUrl: String

})

const link = mongoose.model("links", Links);

module.exports = link;