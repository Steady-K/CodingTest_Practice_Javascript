function solution(polynomial) {
    let xSum = 0;
    let constantSum = 0;
    
    const splitPlus = polynomial.split(' + ')
    
    splitPlus.forEach(term => {
        if(term.includes('x')) {
            const coeff = term === 'x' ? 1 : Number(term.replace('x', ''))
            xSum += coeff;
        } else {
            constantSum += Number(term);
        }
    })
    
    if(xSum && constantSum) return `${xSum === 1 ? '' : xSum}x + ${constantSum}`
    if(xSum) return `${xSum === 1 ? '' : xSum}x`
    return `${constantSum}`
    
}