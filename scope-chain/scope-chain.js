  function b(){
      console.log(myvar)
  }
  function a(){
      var myvar=2; //here myvar is local variable 
      //if i declare variable without var keyword it becomes global variable even inside function
      b()
  }
  var myvar =1; //here myvar is global variable
  a()