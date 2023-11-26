function solution(num_list) {
    
    i = 0;
    even = 0;
    odd = 0;
   for(i = 0; i<=num_list.length; i++){
       if(num_list[i] % 2 === 0){
           even++
       }else if(num_list[i] % 2 === 1){
           odd++
       }
       
   }
        
    
    
    var answer = [even,odd];
    return answer;
}