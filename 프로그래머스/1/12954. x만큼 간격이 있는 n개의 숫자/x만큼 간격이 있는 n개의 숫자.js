function solution(x, n) {
    arr=[];
    let i = 0;
    let sum =0;
    for(i =0; n>i;i++){
    sum += x;
        arr[i] =sum;
    }
    return arr;
}