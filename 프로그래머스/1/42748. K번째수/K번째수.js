function solution(array, commands) {
    const result = [];
    
    for(let command of commands) {
        const start = command[0] - 1;
        const end = command[1];
        const sAndSorted = array.slice(start, end).sort((a, b) => a - b);
        const select = command[2]
        
        result.push(sAndSorted[select - 1])
    }
    return result;
}