function solution(array) {
    const max = Math.max(...array);
    const position = array.indexOf(max);
    
    return [max, position];
}