function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    const num1 = Number(a);
    const num2 = Number(b);
    
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y
    };
    
    return operations[op](num1, num2);
}