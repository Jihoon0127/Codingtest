function solution(num_list) {
    let sum = 0 ;
    let sum1 = 1;
    for(let i = 0 ; num_list.length>i ; i++){
        if(num_list.length>=11){
            sum += num_list[i]
        }else{
            sum1 *= num_list[i]
        }
    }
return num_list.length>=11 ? sum : sum1
}