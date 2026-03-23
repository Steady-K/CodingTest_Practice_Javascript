function solution(t, p) {
    const pNum = BigInt(p)
    const len = p.length
    let count = 0
    
    for(let i = 0; i <= t.length - len; i++) {
        const sub = BigInt(t.slice(i, i + len))
        if(sub <= pNum) count++
    }
    return count
}