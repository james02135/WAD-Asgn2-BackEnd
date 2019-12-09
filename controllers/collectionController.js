const Collection = require("../models/collection");
const controller = {
    index(req, res){
        Collection.find({}, function(err, collections) {
            if (err) res.send(err);

            res.send(collections);
        });
    }
}


module.exports = controller;
