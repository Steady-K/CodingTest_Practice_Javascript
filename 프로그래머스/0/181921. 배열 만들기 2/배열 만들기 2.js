function solution(l, r) {
    let result = [];
    
    for (let i = l; i <= r; i++) {
        let digits = [...i.toString()];
        
        if (digits.every(digit => digit === '0' || digit === '5')) {
            result.push(i)
        } 

    }
    return result.length > 0 ? result : [-1];
    
}