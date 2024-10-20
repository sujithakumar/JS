
let closureFunction = function(){
    let mydata = 100;

    return {
        getData : function(){
            return mydata;
        },
        setData : function(inp){
            mydata = inp;
        }
    }
}

const obj = closureFunction();

console.log(obj.getData()); //100
obj.setData(200);
console.log(obj.getData()); //200