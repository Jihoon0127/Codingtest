function solution(a, b) {
    let sum = 0;
    
    for(let i = 0 ; a.length-1>=i ; i++){
        sum += a[i] * b[i]
    }
    return sum
}