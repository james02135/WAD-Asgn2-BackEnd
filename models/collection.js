const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'User', 
        required: true
    },
    beerName: {
        type: String,
        required: true,
        minlength: [4, 'too few letters(min 4)'],
        maxlength: [50, 'too many letters(max 50']
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true,
        minlength: [10, 'not enough for valid review(min 10'],
        maxlength: [200, 'no need to write a novel, its just a beer(max 200)']
    }
})

const beerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    abv: {
        type: String,
        required: true,
        min: [1, 'this is a beer right? (min abv 1)'],
        max: [50, 'this is a beer right? (max abv 50']
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    examples: {
        type: String,
        required: true
    },
    picture: {"thumbnail": String},
    reviews: [reviewSchema]
},
{
    collection: 'beers'
})









const collection = mongoose.model("beers", beerSchema);

module.exports = collection;

