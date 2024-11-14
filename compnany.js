// //["dsadsa",["abc","cde"],["fgh","ijk"]]

// function fun (arr) {
//   return arr.reduce((acc , curr) =>  {

//     if(Array.isArray(curr))  {

//       return acc.concat(fun(curr));
//     }else {

//       return acc.concat(curr);
//     }
//   } , []);

// }

// const c = ["dsadsa",["abc","cde"],["fgh","ijk"]];

// const b = fun(c);

// console.log(b);



let arr =  [0,0,1,1,1,2,2,3,3,4]


let a = []; 

for(let i = 0 ; i < arr.length ; i++){
  if(!a.includes(arr[i])){
    a.push(arr[i]);
  }

// if(a.indexOf(arr[i] === -1)){
//   a.push(arr[i]);
// }

}

console.log(a);
















