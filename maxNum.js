// Find the max count of consecutive 1’s in an array ?




let a = [1, 1, 1, 1, 2, 2, 3, 3, 1, 4, 5];
let count = 0;
let maxCount = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {

        count++;
        if (count > maxCount) {
            maxCount = count;
        }
    } else {
        count = 0;
    }
}

console.log(maxCount);

