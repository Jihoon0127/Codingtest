function solution(x) {
   let result = String(x).split('');
   let sum = 0;
   for(let i = 0; i < result.length; i++) {
       sum += Number(result[i]);
   }

   if(x % sum === 0){
      return true ;
   } else {
      return false;
   }   
}