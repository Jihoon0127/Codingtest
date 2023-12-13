function solution(my_string) {
    const ab = /[aeiou]+/g
   return my_string.replace(ab,'')
}