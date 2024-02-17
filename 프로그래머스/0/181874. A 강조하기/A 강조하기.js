function solution(myString) {
    let result = myString.split('');
    for(let i = 0 ; i < myString.length; i++){
        if(result[i] =='a'){
            result[i] = result[i].toUpperCase()
        }else if(myString[i] == ' ' || myString[i] == 'A'){
            result[i] = result[i]
        }else{
            result[i] = result[i].toLowerCase()
        }    
    }
    return result.join('')
}