function solution(balls, share) {
    const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
    return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)))
}