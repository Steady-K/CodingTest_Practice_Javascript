function solution(x) {
    let result = [];
    while (true) {
        result.push(x);
        
        if  (x === 1) break;
        
        if (x % 2 === 0) {
            x = x / 2;
        } else {
            x = 3 * x + 1;
        }
    }
    return result;
}