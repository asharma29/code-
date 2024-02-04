
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(1);

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});