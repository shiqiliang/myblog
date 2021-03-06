var mongoose = require('mongoose');
var config = require('../config').config;

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

require('./user');
require('./post');
require('./blog');

exports.User = mongoose.model('User');
exports.Post = mongoose.model('Post');
exports.Blog = mongoose.model('Blog');