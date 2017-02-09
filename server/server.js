var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Visitor = require("./models/post.js");
var path = require("path");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/signin");

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static("public"));

app.get("/", function(req, res, next) {
  Visitor.find()
  .exec(function(err, visitors) {
    if (err) {
      return next(err);
    }
    res.render("index", { visitors: visitors });
  });

});

app.post("/", function(req, res) {

  var name = req.body.name;
  var company = req.body.company;
  var role = req.body.role;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;

  var newSignee = new Visitor ({
    name: name,
    company: company,
    role: role,
    email: email,
    phoneNumber: phoneNumber
  })

  console.log(newSignee);

  newSignee.save(function() {
    res.redirect("/")
  });

})

app.listen(3000, function() {
  console.log("live from 3000")
});
