function solution(n) {
    const str = String(n);
    const num = (a) => Number(a);
    const arr = Array.from(str, num);
    
  
    const reversedArr = arr.reverse();
    
    console.log(reversedArr);
    return reversedArr;
}