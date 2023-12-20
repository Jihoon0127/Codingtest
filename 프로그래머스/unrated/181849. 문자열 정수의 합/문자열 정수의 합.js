function solution(num_str) {
    let result = num_str.split('')
    return result.map(a=>parseInt(a)).reduce((a,b) =>a+b)
}