function solution(binomial) {
    const a = Number(binomial.split(' ')[0]);
    const op = binomial.split(' ')[1];
    const b = Number(binomial.split(' ')[2]);
    
    if (op === '+') {
        return a + b;
        } else if ( op === '-') {
        return a - b;
        } else if ( op === '*') {
        return a * b;
     }
}