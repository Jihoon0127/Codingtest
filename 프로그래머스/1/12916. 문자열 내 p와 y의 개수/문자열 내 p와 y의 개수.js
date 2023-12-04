function solution(s) {
    let result = s.toLowerCase().split("");
    let p = result.filter(char => char === 'p').length;
    let y = result.filter(char => char === 'y').length;
    return p == y;
}