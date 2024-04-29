function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        console.log("j" , arr[j]);
        console.log("j+1" , arr[j+1]);
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Example usage:
  var numbers = ['2', '1', '3', '10', '3', '5'];
  console.log("Original array:", numbers);
  var sortedNumbers = bubbleSort(numbers);
  console.log("Sorted array:", sortedNumbers);
  