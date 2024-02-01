function solution(my_string, n) {
    let result = '';
    let result1 = my_string.split('')
    for(let i = my_string.length - n ; i < my_string.length ; i++){
        result += result1[i] 
    }
    return result
}