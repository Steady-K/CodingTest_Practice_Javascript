function solution(numbers) {
    const numSort = numbers.sort((a, b) => a - b);
    
    return Math.max(numSort[0] * numSort[1], numSort.at(-1) * numSort.at(-2))
}