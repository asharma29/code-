let arr = [3, 2 ,1 ,3,3,1];
let b = arr.filter((ele , i , arr) => arr.indexOf(ele) != i);
        console.log(b.length );