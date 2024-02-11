function solution(array, height) {
    let result = 0;
    let arr = array.sort((a,b)=>a-b);
    console.log(arr)
    
    for(let i = 0 ; array.length-1 >=i ; i++){
        if(array[i]>height){
            result++;
        }
    }
    return result ;
}