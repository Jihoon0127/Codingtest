function solution(n) {
   
       let sum = ''
    for(let i = 1; n >=i ; i++){
        if(i%2 != 0){
            sum += '수'
        }else{
            sum += '박'
        }
    }
   return sum
}


