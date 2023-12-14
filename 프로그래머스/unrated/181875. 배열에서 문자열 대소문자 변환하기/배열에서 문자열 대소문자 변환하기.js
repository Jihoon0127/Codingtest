function solution(strArr) {
    let sum = []
    for(let i = 0 ; strArr.length>i; i++){
        if(i%2 ==0){
            sum.push(strArr[i].toLowerCase())
        }else{
            sum.push(strArr[i].toUpperCase())
        }
        
    }
    return sum
}