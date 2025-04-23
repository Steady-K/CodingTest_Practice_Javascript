function solution(start_num, end_num) {
    const result = [];
    
    for (let i = 0; i <= start_num - end_num; i++) {
        result.push(start_num - i)
    }
    return result;
}