Boolean.prototype.state =  function () {
    if(this.valueOf() == false){
        return "Toggle"
    }else {
        return "Fixed";
    }
};

function show (){
    var my_state = new Boolean(false);
    console.log(my_state.state());
}
show();