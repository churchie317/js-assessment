exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binaryNum = ( num >>> 0 ).toString(2);
    var binaryNumReverse = '';

    for ( var i = binaryNum.length - 1; i >= 0; i-- ) {
      binaryNumReverse += binaryNum[i];
    }

    return Number(binaryNumReverse[bit - 1]);
  },

  base10: function(str) {
    var bits = [];
    var base10Num = 0;

    for ( var i = str.length - 1; i >= 0; i-- ) {
      bits[bits.length] = Number(str[i]);
    }

    bits.forEach(function(value, index) {
      if ( value === 1 ) {
        base10Num += Math.pow(2, index);
      }
    })

    return base10Num;
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
