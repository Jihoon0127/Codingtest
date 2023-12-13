function solution(numbers) {
    let num = [0,1,2,3,4,5,6,7,8,9];
    let sum = 0;
    
    for(let i = 0 ; i <= 9 ; i++){
        if(numbers.indexOf(num[i]) === -1){  
            sum += num[i]; 
            console.log(sum)
        }
        
    }      
    return sum;  
}