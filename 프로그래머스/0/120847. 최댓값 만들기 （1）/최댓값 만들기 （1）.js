function solution(numbers) {
    const numLen = numbers.length;
    const s = numbers.sort((a, b) => a - b);
    return numbers[numLen - 1] * numbers[numLen - 2]
}