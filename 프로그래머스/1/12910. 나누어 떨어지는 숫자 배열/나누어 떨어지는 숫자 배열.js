function solution(arr, divisor) {
    const dividedArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            dividedArr.push(arr[i])
        }
    }
    dividedArr.sort((a,b) => a - b)
    return dividedArr.length === 0 ? [-1] : dividedArr
}