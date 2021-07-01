// function getname(){
//     return " ashar"
// }
// var name = getname()
// getname() // function call
// console.log(name)
function getname(){
    var a= 1;
    var b=2;
    var c= a+b;
    var name= "ashar"
    return c+ name;
}
getname()
console.log(getname())
// or......
// var name= getname();
// console.log(name)

//Regular function with parameter
function getData(number1,number2,fullname){
    var value1= number1;
    var value2=number2;
    var total = value1+value2;
    var name= fullname
    return total+ name;
}
var data = getData(2,4,"ash")
console.log(data)