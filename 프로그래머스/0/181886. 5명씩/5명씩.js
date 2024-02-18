function solution(names) {
    let arr = []
    for(let i =0 ; names.length>i ; i+=5){
        arr.push(names[i]);
    }
    return arr ;
}