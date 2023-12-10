function solution(money) {
    let coffee = 5500;
    
    let result = Math.floor(money/coffee)
    let result1 =money - coffee * result
    console.log(result)  
    console.log(result1)  
    return Array(result,result1)
}