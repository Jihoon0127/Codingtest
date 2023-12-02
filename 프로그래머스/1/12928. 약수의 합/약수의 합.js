function solution(n) {
    let i = 0;
    let sum = 0;
    for(i = 0 ; n>=i ; i++){
        if(n%i ==0){
            sum += i
        }
    }
    return sum;
    
}