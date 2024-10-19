
var passByRef = function(){

    var obj1 = {
        'name':'sujitha',
        'age':'33',
        'height':'165',
        'weight':'65',
        'mark':'100'
    }

    //passbyrefernce
    console.log("obj1",obj1);
     var obj2 = obj1;
    obj2.name = "YUMI";
    console.log("obj1 Name",obj1.name);
    console.log("obj2 Name",obj2.name);
    //deleting 
    console.log("obj2 Mark",obj2.mark);
    delete obj2.mark;
    console.log("obj1 Mark",obj1.mark);
    console.log("obj2 Mark",obj2.mark);
}

passByRef();