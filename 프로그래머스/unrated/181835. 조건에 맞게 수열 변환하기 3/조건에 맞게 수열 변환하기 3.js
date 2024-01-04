function solution(arr, k) {
    for(let i = 0 ; arr.length>i ; i++){
         if(k%2 ==0){
             arr[i]+=k  
         }else{
             arr[i]*=k
         }
    }
    return arr
    
   
}