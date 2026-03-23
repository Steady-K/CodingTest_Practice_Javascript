function solution(s) {
    const lastIdx = {}
    const result = []
    
    s.split('').forEach((e, i) => {
        if(lastIdx[e] === undefined) {
            result.push(-1)
        } else {
            result.push(i - lastIdx[e])
        }
        lastIdx[e] = i
    })
    return result
}