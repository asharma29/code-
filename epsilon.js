let employees = [
    {id: 1, title: "", name: "emp1", Gender: "M", age: 34},
    {id: 2, title: "", name: "emp2", Gender: "F", age: 44},
    {id: 3, title: "", name: "emp3", Gender: "M", age: 64},
    {id: 4, title: "", name: "emp4", Gender: "F", age: 54},
    {id: 5, title: "", name: "emp5", Gender: "M", age: 24},
    {id: 6, title: "", name: "emp6", Gender: "F", age: 74},
];

let f = employees.filter((ele )=> {
        if(ele.Gender == 'M'){
            return ele.title = "Mr"
        } else{
            return ele.title = "Mrs"
        }
    })

let c = employees.map((i) => {
        return i.name
})
console.log("filter" , c  , "" + "" + "map" , f)