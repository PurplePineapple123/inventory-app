var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MfgSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
    description: { type: String, required: true },
  }
);

MfgSchema
.virtual('url')
.get(function () {
  return '/catalog/mfg/' + this._id;
});

module.exports = mongoose.model('Mfg', MfgSchema);