function solution(cipher, code) {
   let result = cipher.split('');
   let result1 = ''
    for(let i =code ; i<=result.length ; i+=code){
            result1 += result[i-1]
    }
    
    return result1
}