function solution(s) {
    console.log(s);
    let result = s.toLowerCase().split("");
    console.log(result);
    let p = result.filter(char => char === 'p').length;
    
    console.log(p);
    let y = result.filter(char => char === 'y').length;
    return p == y ;
}