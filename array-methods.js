var array = ["cool", 124, "this", "how's it going?", 2385, {cool: 'cool'}, true];

console.log(array);

//forEach has no return value
var forEachExample = array.forEach(function(item, index){
  var i = item;
  console.log(item);
  return item;
});
console.log("for each example", forEachExample)

//map returns another array
var mapExample = array.map(function(item, index) {
	var newItem = "cool"
  return String(newItem + item)
});
console.log("map example", mapExample)

//filter returns another array
var filterExample = array.filter(function(item, index) {
  console.log("strings", ""+item)
  if (!item !== item) {
  	return true;
  }
});
console.log("filter example", filterExample);

//reduce returns a single thing
var reduceExample = array.reduce(function(initialValue, item) {

});
console.log(reduceExample);
