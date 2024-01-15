function solution(n, control) {
    let controlArr = control.split('')
  for(let i = 0 ; i <=control.length; i++){
      if(controlArr[i]=="w"){
          ++n;
      }else if(controlArr[i]=="s"){
          --n;
      }else if(controlArr[i]=="d"){
          n+=10
      }else if(controlArr[i]=="a"){
          n-=10
      }
  }
    return n
}