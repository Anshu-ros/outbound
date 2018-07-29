var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

var UserSchema = new mongoose.Schema({
  yourlink: {
    type: String,
    required: true,
},
});
var User = mongoose.model("User", UserSchema);
module.exports = User;