/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    var myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: function(num) {
    var newString = "";
    var numString = num.toString();

    for ( var i = 0; i < num.length; i++ ) {
      if ( num[i].charCodeAt() > 47 && num[i].charCodeAt() < 58 ) {
        newString += num[i]
      }
    }

    if ( newString[0] === "0" ) {
      return Number(0);
    }

    return Number(newString);
  },

  identity: function(val1, val2) {
    return val1 === val2;
  }
};
