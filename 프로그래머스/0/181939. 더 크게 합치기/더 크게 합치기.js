function solution(a, b) {
    let result = parseInt(String(a) + String(b))
    let result1 = parseInt(String(b) + String(a))
    return result > result1 ? result : result1
}