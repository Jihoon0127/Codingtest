function solution(array) {
   let arr =  array.sort((a,b)=>a-b)
   let middle =  Math.floor(array.length/2)
   return arr[middle]
   
   
   
}