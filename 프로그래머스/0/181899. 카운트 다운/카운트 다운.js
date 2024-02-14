function solution(start, end_num) {
    let result = []
    let startnum = start;
    for(let i = 0 ; i <= start-end_num ; i++){
        result[i] = startnum--;
       
    }
    return result ;
}