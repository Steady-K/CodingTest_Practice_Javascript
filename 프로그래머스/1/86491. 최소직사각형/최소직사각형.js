function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for(const [w, h] of sizes) {
        const longer = Math.max(w, h);
        const shorter = Math.min(w, h);
        if(longer > maxW) maxW = longer;
        if(shorter > maxH) maxH = shorter;
    }
    return maxW * maxH;
}