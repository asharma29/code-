let array = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];

function findLargest(arr) {
    let stack = [...arr]; // Create a stack from the input array
    let largest = -Infinity;  // Start with the smallest possible value
        console.log("in" , -Infinity);
    while (stack.length > 0) {
        let current = stack.pop();  // Pop the last element from the stack
        
        if (Array.isArray(current)) {
            // If the current element is an array, push its elements onto the stack
            stack.push(...current);
        } else {
            // If the current element is not an array, compare it with the largest value
            largest = Math.max(largest, current);
        }
    }

    return largest;
}

console.log(findLargest(array));  // Output: 709
