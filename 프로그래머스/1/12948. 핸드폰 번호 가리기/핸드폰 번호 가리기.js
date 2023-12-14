function solution(phone_number) {
    
    console.log(phone_number.replace(phone_number[0],'*'))
    for(let i = 0 ; phone_number.length-4>i; i++){
       phone_number = phone_number.replace(phone_number[i],'*')
    }
    
    return phone_number
}