let a = [1, 2, 3, 1, 4, 4, 5, 6];

let uniqueArray = a.reduce((acc, curr) => {

    console.log("acc" , acc);

    console.log("curr" , " + " , curr );
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]