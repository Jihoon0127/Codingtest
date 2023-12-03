function solution(n) {
    let i = 0;
    for(i = 0 ; n>=i ; i++){
        if(n%i ==1){
            return i;
        }
    }
}