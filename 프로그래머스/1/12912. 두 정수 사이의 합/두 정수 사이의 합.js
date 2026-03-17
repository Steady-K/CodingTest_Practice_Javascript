function solution(a, b) {
    let answer = 0
    const arr = [a, b]
    const [A, B] = arr.sort((a, b) => a - b);
    
    for(let i = A; i <= B; i++) {
        answer += i
    }
    return answer
}