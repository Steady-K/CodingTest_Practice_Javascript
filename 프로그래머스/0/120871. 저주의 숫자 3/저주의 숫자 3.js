function solution(n) {
    const num3x = []
    let i = 1;
    while(num3x.length < n) {
        if(!i.toString().includes('3') && i % 3 !== 0) {
            num3x.push(i)
        }
        i++
    }
    return num3x[n - 1];
}