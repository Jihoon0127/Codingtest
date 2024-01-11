function solution(my_string, k) {
   let result =[]
    for(let i = 0; i<k ; i++){
       result[i] = my_string
   }
    return result.toString().replaceAll(",","")
}