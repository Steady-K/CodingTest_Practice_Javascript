function solution(n, k) {
    const answer = [];
    
    for (let i = 1; i <= n; i++) {
        if (i * k <= n) {
            answer.push(i * k);
        }
    }
    return answer;
}