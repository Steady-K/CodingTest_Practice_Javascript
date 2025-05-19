function solution(strArr) {
    const lengthMap = {};
    
    for (let str of strArr) {
        const len = str.length;
        lengthMap[len] = (lengthMap[len] || 0) + 1;
    }
    return Math.max(...Object.values(lengthMap));
}