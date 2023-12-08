function solution(arr, divisor) {
    
     let sum = [];

   
    sum = arr.filter((v) => v % divisor === 0).sort((a,b)=>a-b);
    
    const f =sum.length==0 ?  [-1] : sum    
    return f ;
    

}