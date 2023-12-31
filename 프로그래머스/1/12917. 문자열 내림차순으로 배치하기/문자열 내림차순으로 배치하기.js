function solution(s) {
    let arr =  s.split('').sort().reverse()
    let result = ''
    for(let i =0 ; arr.length-1>=i ; i++){
        result+= arr[i]
    }
    return result
    
    }