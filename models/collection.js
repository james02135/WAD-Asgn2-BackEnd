const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    id: Number,
    category: String,
    name: String,
    picture: {"thumbnail": String},
    abv: String,
    color: String,
    description: String,
    examples: String,
    review: {
        name: String,
        aroma: String,
        mouthfeel: String,
        color: String,
        flavor: String,
        comments: String
    },
},
{
    collection: 'beers'
})

const collection = mongoose.model("beers", collectionSchema);

module.exports = collection;
