'use strict';
module.exports = (function() {
  var secretNumber = function(n) {
    n = 1000;
    var secretNumberGenerator = function() {
      return secretNumber();
    };
    return secretNumber;
  };
})();