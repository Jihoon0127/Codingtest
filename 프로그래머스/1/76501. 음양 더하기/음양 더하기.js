function solution(absolutes, signs) {
    let i = 0;
    for(i = 0 ; i<=signs.length; i++){
        if(signs[i]===true){
            absolutes[i] == absolutes[i]
        }else if (signs[i]===false){
            absolutes[i] = -(absolutes[i]);
        }
        
    }
    console.log(absolutes[0])
        return absolutes.reduce((a, b) => a + b, 0);
}