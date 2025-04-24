function solution(arr, intervals) {
    const result = [];
    const [[a1, b1], [a2, b2]] = intervals;
    
    result.push(...arr.slice(a1, b1 + 1))
    result.push(...arr.slice(a2, b2 + 1))
    
    return result;
}