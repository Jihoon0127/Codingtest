function solution(s) {
    
    const s1 = s.split(' ').map(Number);
    
    const max_value = Math.max(...s1);
    const min_value = Math.min(...s1);
    
    return `${min_value} ${max_value}`
    
}