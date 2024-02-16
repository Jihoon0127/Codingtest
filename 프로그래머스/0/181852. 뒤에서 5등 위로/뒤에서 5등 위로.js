function solution(num_list) {
   let result = num_list.sort((a,b)=>a-b);
   let result1 = [] 
    for(let i = 0 ; i<result.length;i++){
        if(i >=5){
            result1[i-5] = result[i]
        }
    }
    return result1
}