function solution(n) {
    const sqrt = Math.floor(Math.sqrt(n));
    console.log(sqrt);
    if(sqrt*sqrt ==n){
        return (sqrt+1)* (sqrt+1);
    }else{
        return -1;
    }
}