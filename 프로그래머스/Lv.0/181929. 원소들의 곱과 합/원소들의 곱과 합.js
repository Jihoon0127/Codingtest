function solution(num_list) {
    let result = 1;  
    let result1 = num_list.reduce((a,b)=>a+b)*num_list.reduce((a,b)=>a+b);
    for(let i = 0 ; i<num_list.length ; i++){
          result *= num_list[i]
      }
   if(result < result1){
       return 1
   }else{
       return 0;
   }

}