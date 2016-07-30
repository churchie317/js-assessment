exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for ( var i = 0; i < arr.length; i++ ) {
      if ( item === arr[i] ) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    })
  },

  remove: function(arr, item) {
    var container = [];
    var counter = 0;

    arr.forEach(function(value, index, array) {
      if ( value !== item ) {
        container[counter] = value;
        counter++;
      }
    })

    return container;
  },

  removeWithoutCopy: function(arr, item) {
    var counter = 0;
    var storage;

    arr.forEach(function(value, index, array) {
      if ( value === item ) {
        for ( var i = index; i < arr.length; i++ ) {
          storage = arr[i + 2];
          arr[i] = storage;
        }
      }
    })

    arr.length = 3;
    return arr;
  },

  append: function(arr, item) {
    var copy = [];

    arr.forEach(function(value, index) {
      copy[index] = value;
    })

    copy[copy.length] = item;

    return copy;
  },

  truncate: function(arr) {
    var copy = [];

    arr.forEach(function(value, index) {
      copy[index] = value;
    });

    copy.length -= 1;

    return copy;
  },

  prepend: function(arr, item) {
    var copy = [];
    copy[0] = item;

    arr.forEach(function(value, index) {
      copy[index + 1] = value;
    })

    return copy;
  },

  curtail: function(arr) {
    var copy = [];

    arr.forEach(function(value, index) {
      if ( index !== 0 ) {
        copy[index - 1] = value;
      }
    })

    return copy;
  },

  concat: function(arr1, arr2) {
    var copy = [];

    arr1.forEach(function(value) {
      copy[copy.length] = value;
    })

    arr2.forEach(function(value) {
      copy[copy.length] = value;
    })

    return copy;
  },

  insert: function(arr, item, index) {
    var copy = [];

    for ( var i = 0; i <= arr.length; i++ ) {
      // console.log("i: ", i)
      // console.log("index: ", index)
      if ( i < index ) {
        copy[i] = arr[i];
      } else if ( i === index) {
        copy[i] = item;
      } else {
        copy[i] = arr[i - 1];
      }
    }

    return copy;
  },

  count: function(arr, item) {
    var count = 0;

    arr.forEach(function(value) {
      if ( value === item ) {
        count++;
      }
    })

    return count;
  },

  duplicates: function(arr) {
    var store = { };
    var newArray = [];

    arr.forEach(function(value) {
      if ( value in store ) {
        store[value].count++;
      } else {
        store[value] = {value: value, count: 1};
      }
    })

    for (var key in store ) {
      if ( store[key].count > 1 ) {
        newArray[newArray.length] = store[key].value;
      }
    }

    return newArray;
  },

  square: function(arr) {
    var copy = [];

    arr.forEach(function(value, index) {
      copy[index] = value * value;
    })

    return copy;
  },

  findAllOccurrences: function(arr, target) {
    var container = [];

    arr.forEach(function(value, index) {
      if ( value === target ) {
        container[container.length] = index;
      }
    })

    return container;
  }
};
