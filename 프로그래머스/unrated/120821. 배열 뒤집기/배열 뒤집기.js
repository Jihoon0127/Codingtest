function solution(num_list) {
    let result =[];
    // for(let i = num_list.length; i>=0;i--){ // i : num_list의 마지막 인덱스부터 시작
    //   for(let j = 0 ; jnum_list.length ; j++){ // j : 0부터 시작
    //       result[j] = num_list[i];
    //   }
    // }
    
    // let temp = '';
    
    for(let i = 0; i < num_list.length; i++){
       result[i] = num_list[num_list.length - i -1] ;
    }
    
    return result;
   
    
    
}