function solution(a, b, c, d) {
    const nums = [a, b, c, d];
    const counts = {};
    
    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const [p, pCount] = entries[0];
    
    if (entries.length === 1) {
        return 1111 * Number(p);
    } else if (entries.length === 2) {
        const [q, qCount] = entries[1];
        if (pCount === 3) {
            return Math.pow(10 * Number(p) + Number(q), 2);
        } else {
            return (Number(p) + Number(q)) * Math.abs(Number(p) - Number(q));
        }
    } else if (entries.length === 3) {
        const q = entries[1][0];
        const r = entries[2][0];
        return Number(q) * Number(r);
    } else {
        return Math.min(...nums);
    }
}