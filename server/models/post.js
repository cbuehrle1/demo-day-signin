var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Signee = new Schema ({
  name: String,
  company: String,
  role: String,
  email: String,
  phoneNumber: String,
});

var signedUp = mongoose.model("signedUp", Signee);

module.exports = signedUp;
