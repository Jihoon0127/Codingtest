function solution(price, money, count) {
    let result = 0;
    for(let i = 1 ; i <= count ; i++){
       
            result += price * i
            console.log(result)
        
    }
    return money < result ? result - money : 0  
}