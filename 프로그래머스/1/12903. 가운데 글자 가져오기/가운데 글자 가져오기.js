function solution(s) {
    
     if(s.length %2 ==1){
        return s[Math.floor(s.length/2)]
    }else if (s.length %2 ==0){
        return s[Math.floor(s.length/2-1)]+s[Math.floor(s.length/2)]    
    }
}