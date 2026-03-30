function solution(dartResult) {
    const scores = []
    let num = ''
    
    for(let i = 0; i < dartResult.length; i++) {
        const ch = dartResult[i]
        
        if(!isNaN(ch)) {
            num += ch
        } else if (ch === "S" || ch === "D" || ch === "T") {
            let score = Number(num)
            
            if(ch === "S") score = score ** 1;
            if(ch === "D") score = score ** 2;
            if(ch === "T") score = score ** 3;
            
            scores.push(score);
            num = ''
        } else if (ch === "*") {
            scores[scores.length - 1] *= 2
            if (scores.length > 1) {
                scores[scores.length - 2] *= 2
            }
        } else if (ch === "#") {
            scores[scores.length - 1] *= -1
        }
    } 
    return scores.reduce((sum, cur) => sum + cur, 0)
}