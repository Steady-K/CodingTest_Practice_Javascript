function solution(numbers) {
    const strs = numbers.map(String);
    
    strs.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        
        if(ab === ba) return 0;
        
        return ba > ab ? 1 : -1;
    })
    const answer = strs.join('')
    
    return answer[0] === '0' ? '0' : answer;
}