function solution(a, b) {
    
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    console.log(max)
    let i = 0;
    let sum = 0;
    for(i = min ; i <= max ; i++){
        sum+=i;
    }
    
    
    if(a==b){
        return a;
    }else{
        return sum;
    }
}