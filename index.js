const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes")

const app = express();
const port = 4000;
app.use(router);

mongoose.connect("mongodb://localhost:27017/beers", { useNewUrlParser:true, useUnifiedTopology: true });

app.listen(port, function() {
    console.log("listening on port 4000");
});