var myArray = [1, 1, 2, 2, 3];
var unique = myArray.filter((value, index, array) => array.indexOf(value) != index);
console.log("🚀 ~ file: uniqueArray.js ~ line 3 ~ unique", unique)
 