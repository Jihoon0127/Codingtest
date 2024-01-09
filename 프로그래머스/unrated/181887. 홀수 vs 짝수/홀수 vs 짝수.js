function solution(num_list) {
    let result = 0;
    let result1 = 0
    for(let i = 0 ; i <= num_list.length-1; i++){
        if(i%2 ==0){
             result += num_list[i]
        }else{
            result1 += num_list[i]
        }     
    }
    return result > result1 ? result : result1
}