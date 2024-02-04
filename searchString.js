
const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

const count = {};

for (const element of arr) {
  count[element] = (count[element] || 0) + 1;
}

// 👇️ { one: 3, two: 2, three: 1 }
console.log(count);
