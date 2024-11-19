let c = 5;
let a = [0, 1];

for (let i = 2; i < c; i++) {
    a[i] = a[i - 1] + a[i - 2];
}

console.log(a);


