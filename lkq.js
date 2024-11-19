
// Input1= "epwwwke", output = 2

// Input2 = "bbbbb", output = 1

// Input3 = "abcabcbbb" output = 3 to check  count string has duplicates






















// (function () { 
//     console.log(1);
 
//     const promise1 = new Promise((resolve) => { 
            
//         setTimeout(() => {
//             console.log('promise');
//         } , 1000)
        
//     });
 
//     setTimeout(function () { 
//         console.log(3); 
//     }, 1000);
 
//     promise1.then(() => { 
//         console.log(4); 
//     });
 
//     setTimeout(function () { 
//         console.log(5); 
//     }, 0);
 
//     console.log(6); 
// })();

// 1 , 6 , 2 , 4 , 5 , 3let a = "aaaabbcdd";
let c = a.split('');  // Split the string into an array of characters.
let b = new Map();    // Create a new Map.

for (let i = 0; i < c.length; i++) {
  if (!b.has(c[i])) {            // If the Map doesn't already have this key (character)
    b.set(c[i], 1);              // Set the count of the character to 1
  } else {
    b.set(c[i], b.get(c[i]) + 1);  // Increment the count of the character
  }
}

let d = [];       // Create an empty array `d`
d.push(b);        // Push the Map into the array `d`

// Count how many values are greater than 1 in the Map
let countGreaterThanOne = 0;

for (let value of b.values()) {
  if (value > 1) {
    countGreaterThanOne++;
  }
}

console.log(d);  // Log the Map in the array `d`
console.log("Count of values greater than 1:", countGreaterThanOne);  // Log the count of values greater than 1
