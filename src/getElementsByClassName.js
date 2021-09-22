// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // Check document for each element.
  var elements = [];
  // Base case is the body element.
  // if (nodes !== undefined) {
  //   nodes = document.body;
  // }
  // Iterate through the children.
  var checkChildren = function(child) {
    if (_.contains(child.classList, className)) {
      elements.push(child);
    }
    for (var i = 0; i < child.childNodes.length; i++) {
      //var newChild = child[i];
      checkChildren(child.childNodes[i]);
    }
  };
  checkChildren(document.body);

  // Return array of matched elements.
  //console.log(JSON.stringify(elements));
  return elements;
};
