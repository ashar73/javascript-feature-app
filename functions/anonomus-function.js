var getname = function(){//getname will act like a function
    var a= 1;
    var b=2;
    var c= a+b;
    var name= "ashar"
    return c+ name;
} 
var name = getname();
console.log(name)
//Anonomus funcyion with parameter
var getData = function(num1,num2,firstname){
    var a= num1;
    var b=num2;
    var c= a+b;
    var name= firstname;
    return c+name;
}
var data = getData(5,2,"ash")
console.log(data)