function solution(arr, n) {
    for(let i = 0 ; i<= arr.length-1 ; i++){
        if(arr.length %2 ==0){
            i%2 === 1 ? arr[i]+=n : arr[i]
        }else{
            i%2 === 0 ? arr[i]+=n : arr[i]
        }
        
    }
    return arr
    
      
}