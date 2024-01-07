function solution(num_list) {
    let num = num_list.sort((a,b) => a-b)
    let result =[]
    for(let i = 0 ; i<5 ; i++){
        result[i] = num[i]
    }
    return result
}