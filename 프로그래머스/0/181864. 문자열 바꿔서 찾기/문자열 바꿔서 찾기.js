function solution(myString, pat) {
    let result = myString.split('').map((a) => a ==='A' ? 'B' : 'A').join('');
   return result.includes(pat) === true ? 1 : 0 ;
    
}