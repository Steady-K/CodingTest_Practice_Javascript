function solution(a, d, included) {
    var answer = 0;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i] === true) {
            answer += a + i*d;
        } else {
            if (included[i] !== true) {
                answer += 0;
            }
        }
    }
    
    return answer;
}