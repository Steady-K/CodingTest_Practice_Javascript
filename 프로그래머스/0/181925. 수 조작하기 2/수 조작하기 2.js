function solution(numLog) {
    return numLog.slice(1).reduce((acc, cur, i) => {
        let diff = cur - numLog[i];
        return acc + (diff === 1 ? 'w' : diff === -1 ? 's' : diff === 10 ? 'd' : 'a');
    }, '');
}
