function solution(k, score) {
    const result = []
    const hall = []
    
    score.forEach(s => {
        hall.push(s)
        hall.sort((a, b) => a- b)
        
        if(hall.length > k) {
            hall.shift()
        }
        result.push(hall[0])
    })
    return result
}