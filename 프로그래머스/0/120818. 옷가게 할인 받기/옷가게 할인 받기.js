function solution(price) {
    const discounts = [
        { min: 500000, rate: 0.8 },
        { min: 300000, rate: 0.9 },
        { min: 100000, rate: 0.95 },
    ];
    
    for (let {min, rate} of discounts) {
        if (price >= min) {
            return Math.floor(price * rate);
        }
    }
    return price;
}