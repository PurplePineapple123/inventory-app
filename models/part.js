var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PartSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
    price: { type: String, required: true },
    inventory: { type: Number, required: true },
    features: { type: String, required: true },
    mfg: {type: Schema.Types.ObjectId, ref: 'Mfg'},
    category: {type: Schema.Types.ObjectId, ref: 'Category'}
  }
);

PartSchema
.virtual('url')
.get(function () {
  return '/catalog/part/' + this._id;
});

module.exports = mongoose.model('Part', PartSchema);