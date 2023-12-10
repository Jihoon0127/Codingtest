function solution(n) {
    let arr = String(n).split('')
    let arr2 = arr.map(Number)
    console.log(arr2)
    return arr2.reduce((a,b)=>a+b)
}