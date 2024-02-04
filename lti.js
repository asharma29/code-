console.log("a");
console.log("b");
function timeout(ms) {
    return new Promise(() => {
        setTimeout(() => {
            console.log("c")
        
})
});
}
async function sleep(fn, ...args) {
    await timeout(30000);
    return fn(...args);
}
    
sleep()

console.log("d");