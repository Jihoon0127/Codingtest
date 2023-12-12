function solution(my_string) {
    let abc = my_string.split('');
      let sum = 0;
    let num = abc.filter((a)=> Number(a))
    console.log(num)
    for(let i = 0 ; num.length-1>=i ; i++){
        sum+= parseInt(num[i])
    }
    
    return sum
}