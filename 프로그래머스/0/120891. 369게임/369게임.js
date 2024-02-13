function solution(order) {
    let result =String(order).split('').filter((a) => a==3 || a==6 || a==9)
    return result.length
}