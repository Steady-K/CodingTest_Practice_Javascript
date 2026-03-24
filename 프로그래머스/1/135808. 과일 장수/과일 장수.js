function solution(k, m, score) {
    let result = 0
    const ascScore = score.sort((a, b) => b - a)
    
    for(let i = 0; i < ascScore.length; i += m) {
        const group = ascScore.slice(i, i + m)
        if(group.length === m) {
            result += group[m - 1] * m
        }
    }
    return result 
}