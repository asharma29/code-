
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(1);

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

Promise.any([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

Promise.race([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});