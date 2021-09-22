// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Input Base Case
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    result = '[' + result.join(',') + ']';
    return result;

  }

  if (!Array.isArray(obj) && typeof obj === 'object') {
    var result = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        result.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    result = '{' + result.join(',') + '}';
    return result;

  }

};

