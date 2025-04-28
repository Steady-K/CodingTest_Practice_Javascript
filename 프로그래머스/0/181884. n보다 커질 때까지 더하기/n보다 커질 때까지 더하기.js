function solution(numbers, n) {
    let result = 0;
    
    for (const num of numbers) {
        result += num;
        if (result > n) {
            return result;
        }
    }
}