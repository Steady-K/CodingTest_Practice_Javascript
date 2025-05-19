function solution(strArr) {
    const map = new Map();
    
    strArr.forEach(str => {
        const len = str.length;
        map.set(len, (map.get(len) || 0) + 1)
    });
    
    return Math.max(...map.values());
}