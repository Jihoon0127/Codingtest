function solution(my_string, n) {
    let result = '' ;
    let result1 = my_string.split('')
    for(let i = 0 ; i <n ; i++){
        result += result1[i]
    }
    return result
}