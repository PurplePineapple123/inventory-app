#! /usr/bin/env node

console.log('This script populates some test parts, mfgs and categories to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Part = require('./models/part')
var Mfg = require('./models/Mfg')
var Category = require('./models/Category')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var parts = []
var mfgs = []
var categories = []



function mfgCreate(name, description, cb) {
  mfgdetail = { 
    name: name,
    description: description
  }
  //if (genre != false) bookdetail.genre = genre
    
  var mfg = new Mfg(mfgdetail);    
  mfg.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Mfg: ' + mfg);
    mfgs.push(mfg)
    cb(null, mfg)
  }  );
}

function categoryCreate(name, description, cb) {
  categorydetail = { 
    name: name,
    description: description
  }
  //if (genre != false) bookdetail.genre = genre
    
  var category = new Mfg(mcategorydetail);    
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Mfg: ' + category);
    categories.push(category)
    cb(null, category)
  }  );
}

function partCreate(name, price, inventory, features, mfg, category, cb) {
  partdetail = { 
    name: name,
    price: price,
    inventory: inventory,
    features: features,
    mfg: mfg,
    category: category
  }
  //if (genre != false) bookdetail.genre = genre
    
  var part = new Part(partdetail);    
  part.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Part: ' + part);
    parts.push(part)
    cb(null, part)
  }  );
}




function createCategoryMfg(cb) {
    async.series([
        function(callback) {
          mfgCreate('STNGR', 'Started in 2016 out of a garage. Expanding into optics and beyond.', callback);
        },
        function(callback) {
          mfgCreate('Vortex', 'Leading affordable optics manufactuerer', callback);
        },
        function(callback) {
          mfgCreate('Magpul', 'Polymer is the core of their business', callback);
        },
        function(callback) {
          categoryCreate('Free Float Handguard', 'Lightweight handguards that help to increase accuracy', callback);
        },
        function(callback) {
          categoryCreate('Red Dot Sight', 'A red dot projected onto glass', callback);
        },
        function(callback) {
          categoryCreate('LPVO', 'Low power variable optic usually 1-6 or 1-8', callback);
        },
        function(callback) {
          categoryCreate('Ballistic Sunglasses', 'Made to protect your eyes both on and off the range', callback);
        }
        ],
        // optional callback
        cb);
}


function createParts(cb) {
    async.parallel([
        function(callback) {
          partCreate('Valor Red Dot', '$149', 194, '150k hour battery life', mfgs[0], categories[1], callback);
        },
        function(callback) {
          partCreate('HWK 15" Handguard', '$144.99', 194, '6061-T6 Aluminum', mfgs[0], categories[0], callback);
        },
        function(callback) {
          partCreate('Sparq Red Dot', '$199', 345, '50k hour battery life', mfgs[1], categories[1], callback);
        },
        function(callback) {
          partCreate('Explorer Sunglasses', '$199.99', 6536, 'MIL-PRF', mfgs[2], categories[3], callback);
        },
        function(callback) {
          partCreate(' 1-6 Scope', '$476.99', 94522, '1 to 6 zoom', mfgs[1], categories[2], callback);
        },
        ],
        // optional callback
        cb);
}


async.series([
    createCategoryMfg,
    createParts
    
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



