function solution(numbers, target) {
    let count = 0;
    const n = numbers.length;
    
    const dfs = (idx, sum) => {
        if(idx === n) {
            if(sum === target) count++
            return;
        }
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx +1, sum - numbers[idx]);
    }
    dfs(0,0)
    return count;
}