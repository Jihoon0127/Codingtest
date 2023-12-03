function solution(n)
{
  let add = String(n).split('');
    let i =0;
    let sum = 0 ;
    for(i=0 ; add.length-1>=i;i++){
        sum+= parseInt(add[i]);
    }
    return sum;
    
    
}