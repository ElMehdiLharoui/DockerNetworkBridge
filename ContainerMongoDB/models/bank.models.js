const mongoose = require('mongoose');

const bankModel = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('banks', bankModel);
