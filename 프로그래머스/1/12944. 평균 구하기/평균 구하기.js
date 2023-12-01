function solution(arr) {
   
    let i = 0 ;
    let sum = 0;
    for(i =0; arr.length-1>=i ;i++){
      sum += arr[i];  
    }
    return sum/arr.length;
}