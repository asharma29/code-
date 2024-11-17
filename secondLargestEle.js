let a = [2, 4, 5, 6, 7, 8, 98, 1, 4, 3, 5, 67];

let b = a.sort((a, b) => {
    return a - b;
})
let n = b.length;



console.log(b[n-2])