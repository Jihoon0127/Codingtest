function solution(num_list) {
    let last = num_list[num_list.length-1];
    let second_last = num_list[num_list.length-2];
    last > second_last ? num_list.push(last - second_last) : num_list.push(last * 2);
    return num_list;
}