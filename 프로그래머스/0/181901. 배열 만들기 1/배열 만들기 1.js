function solution(n, k) {
    let result = [];
    for(let i = k, j = 1; i*j <= n ; j++){
        result.push(i*j);
    }
    return result;
}