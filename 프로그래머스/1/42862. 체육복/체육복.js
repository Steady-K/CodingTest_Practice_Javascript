function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    
    for(const s of reserve) {
        if(lostSet.has(s)) {
            lostSet.delete(s);
            reserveSet.delete(s);
        }
    }
    const donors = [...reserveSet].sort((a, b) => a - b);
    for (const r of donors) {
        if(lostSet.has(r - 1)) {
            lostSet.delete(r - 1) 
        } else if (lostSet.has(r + 1)) {
            lostSet.delete(r + 1)
        }
    }
    return n - lostSet.size
}