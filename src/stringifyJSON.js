// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Input Base Case
  var string = '';
  var recursiveStringify = function(obj) {
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
      string += obj;
    }
    if (typeof obj === 'string') {
      string += '"' + obj + '"';
    }
    if (Array.isArray(obj)) {
      string += '[';
      var result = [];
      for (var i = 0; i < obj.length; i++) {
        result.push(recursiveStringify(obj[i]));
      }
      result = result.join(',');
      string += result;
      console.log(result);
      string += ']';
    }
  };
  // Iterate over nested objects
  // Return string
  recursiveStringify(obj);
  console.log(string);
  return string;

};

