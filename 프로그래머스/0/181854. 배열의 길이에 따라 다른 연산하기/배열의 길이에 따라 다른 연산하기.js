function solution(arr, n) {
    const isOdd = arr.length % 2 !== 0;
    
    return arr.map((val, i) => {
        if((isOdd && i % 2 === 0) || (!isOdd && i % 2 !== 0)) {
            return val + n;
        }
        return val;
    })
}