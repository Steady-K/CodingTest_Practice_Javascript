function solution(numbers) {
    let sum = 0;
    numbers.map(num => sum += num);
    const avg = sum / numbers.length;
    const f = avg - avg.floor;
    if(f === 0.5 || f === 0) {
        return avg;
    }
    return avg
}