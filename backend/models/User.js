const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String, email: {type:String, unique:true}, password: String,
  regno: String, gender: String, year: String, branch: String,
  phone: String, sleep: String, study: String, college: String,
  noise: String, religious: String, habits: [String],
  state: String, city: String, photoUrl: String
});
module.exports = mongoose.model('User', userSchema);