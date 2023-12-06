function solution(n) {
    let str = String([n]).split('').sort((a,b)=>b-a);
    console.log(str);
    let i =0;
    let sum='';
    for(i=0; str.length-1 >=i ; i++){
        sum += str[i];
    }
    return parseInt(sum);   
    
    
    
    
}