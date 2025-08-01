function solution(score) {
    const avgScore = (score.map(avg => (avg[0] + avg[1]) / 2))
    const ranks = Array(score.length).fill(1);
    
    for(let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if(avgScore[j] > avgScore[i]) {
                ranks[i]++
            }
        }
    }
    return ranks;
}