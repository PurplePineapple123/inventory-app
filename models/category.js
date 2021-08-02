var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 100 }
  }
);

module.exports = mongoose.model('Category', CategorySchema);