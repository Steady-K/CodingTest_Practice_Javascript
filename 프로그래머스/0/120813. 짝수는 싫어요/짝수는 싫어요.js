function solution(n) {
    const result = [];
    for(let i = 1; i <= n; i++) {
        if(i % 2 !== 0) result.push(i);
    }
    result.sort((a, b) => a - b);
    return result;
}