function solution(left, right) {
    const numArr = []
    let result = 0
    for(let i = left; i <= right; i++) {
        numArr.push(i)
    }
    
    numArr.map(e => {
        let count = 0
        for(let i = 1; i <= e; i++) {
            if(e % i === 0) {
                count++
            }
        }
        if(count % 2 === 0) {
            result += e
        } else {
            result -= e
        }
    })
    return result
}