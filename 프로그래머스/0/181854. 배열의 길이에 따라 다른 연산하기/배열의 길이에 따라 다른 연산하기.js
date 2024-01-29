function solution(arr, n) {
    
  return arr.length%2 ===0 ? arr.map((a,idx)=> idx%2 ==0 ? a : a+n ) : arr.map((a,idx)=> idx%2 ==1? a : a+n )
    
    
      
}