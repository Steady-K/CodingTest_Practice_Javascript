function solution(sides) {
    const [a, b] = sides
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    
    return (a + b - max - 1) + min;
}