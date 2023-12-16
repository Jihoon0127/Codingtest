function solution(num_list, n) {
    let sum = 0;
    for(let i = 0 ; num_list.length-1>i; i++){
        if(num_list[i]==n){
            sum++;
            break;
        }
    }
    return sum
}