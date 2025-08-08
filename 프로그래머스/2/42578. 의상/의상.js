function solution(clothes) {
    const typeCount = new Map();
    
    for(let [name, type] of clothes) {
        typeCount.set(type, (typeCount.get(type) || 0) + 1)
    }
    
    let ways = 1;
    
    for(let count of typeCount.values()) {
        ways *= (count + 1);
    }
    
    return ways - 1;
}