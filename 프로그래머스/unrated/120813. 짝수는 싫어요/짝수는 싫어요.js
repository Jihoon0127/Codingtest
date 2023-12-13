function solution(n) {
    let result =[]
    
    let num = 0;
    
    for(let i = 0 ; n>=i; i++){
        if(i%2 == 1){
            result.push(i)
        }
    }
    return  result.sort((a,b)=>a-b)
}