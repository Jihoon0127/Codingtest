function solution(start_num, end_num) {
    result = [];
    for(let i = 0 ; i<=end_num-start_num; i++){
        result.push(i+start_num)
    }
    return result
}