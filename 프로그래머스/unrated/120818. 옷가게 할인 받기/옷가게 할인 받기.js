function solution(price) {
    let sale = price*0.05
    let sale1 = price * 0.1
    let sale2 = price * 0.2
    
    if(price<100000 &&price>=10){
        return Math.floor(price)
    }
    else if(price <300000){
        return Math.floor(price - sale)
    }else if(price <500000){
        return Math.floor(price -sale1)
    }else if(price<=1000000){
        return Math.floor(price - sale2)
    }
    
}