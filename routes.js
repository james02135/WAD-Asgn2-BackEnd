const express = require("express");
const router = express.Router();
const Collection = require("./models/collection");
const asyncHandler = require('express-async-handler');


//place holder
router.get("/", function(req, res){
    res.send("hello world");
});


// this is the homepage
// gets the "Beer List" from the database
router.get("/beers", (req, res) => {
    Collection.find({}, function(err, collections) {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, collections: collections });
    });
});

// ***BEER METHODS***


// This is the create method
// this method adds a beer to the database
router.post('/addBeer', asyncHandler(async (req, res) => {
    const beer = await Collection.insertMany(req.body);
    console.log(req.body);
    res.status(201).json(beer);
  }));


// this is the update method
// this method saves any edits to a beer
router.post('/updateBeer/:_id', (req, res) => {
    const {_id } = req.params;
    const {abv, color} = req.body;
    console.log(color, abv);
    Collection.findOne({_id}, (err, beer) => {
      if (err) return res.send(err);
      beer.updateOne({$set: {
          abv: abv,
          color: color
      }}).then(() => {
          console.log("beer has been updated");
        return res.json({ success: true })
      }).catch(err => {
          return res.send(err);
      })
    });
});


// this is the delete method
// this method deletes a beer from the database
router.delete('/deleteBeer/:_id', (req, res) => {
    const {_id } = req.params;
    Collection.findOne({_id}, (err, beer) => {
      if (err) return res.send(err);
        console.log(beer);
        beer.remove().then(() => {
            console.log("beer has been deleted");
            return res.json({ success: true });
        }).catch(err => {
            return res.send(err);
        })
    });
});
  
// ***REVIEW METHODS***

// this is the create method
// this method adds a review to each beer
router.post('/addreview', (req, res) => {
    //let data = new Collection();
    console.log(req.body);
});


// this is the update method
// if a beer has been edited
router.post('/updateReview', (req, res) => {
    const { id, update } = req.body;
    Collection.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
});

// this is a delete method for the reviews
router.delete('/deleteReview', (req, res) => {
    const { _id, review } = req.params;
    Collection.findById(_id, (err, beer) => {
      if (err) return res.send(err);
      //need to figure out how to delete a subdocument
      return res.json({ success: true });
    });
})





  

module.exports=router;
