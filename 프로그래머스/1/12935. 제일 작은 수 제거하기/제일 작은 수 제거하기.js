function solution(arr) {

    let min = Math.min(...arr)
    let abc = arr.filter(a=>a != min)
    console.log(abc)
    
    if(abc.length >0){
        return abc
    }else{
        return [-1]
    }
}