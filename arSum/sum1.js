const arr=[3,"a",[3,4,5,[1,2,3]]];
function arSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
      let item= arr[i];
      if (typeof item=="number"){
            sum=sum+item;
        }else if(Array.isArray(item)){
            sum+=arSum(item);
        }
    }
     return sum;   
}
var sum=arSum(arr);
console.log(sum)
