const express = require("express");
const router = express.Router();
const collectionController = require("./controllers/collectionController");

router.get("/", function(req, res){
    res.send("hello world");
});

router.get("/beers", collectionController.index);

module.exports=router;
