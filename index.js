'use strict';

var Promise = require('promise');
var request = require('request');

module.exports = function (args) {
  return new Promise(function (resolve, reject) {
    request(args, function (err, res, body) {
      if (err) {
        return reject(err);
      }
      resolve(body);
    });
  });
};
