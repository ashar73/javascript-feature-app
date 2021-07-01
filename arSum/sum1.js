const arr=[1,2,3,4,5,"a",2, null,[5,5]];
function arSum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let j=0;j<arr[i].length;j++){
                sum=sum+arr[i][j]
            }
        }
        if (typeof arr[i]=="number"){
            sum=sum+arr[i];
        }else if(typeof arr[i]=="string" || typeof arr[i]=="object"){
            continue;
        }
            
        }
        
    console.log(sum);
}
arSum(arr)