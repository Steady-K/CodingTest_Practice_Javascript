function solution(arr) {
    const len = arr.length;
    let power = 1;
    
    while (power < arr.length) {
        power *= 2;
    }
    
    const zerosToAdd = power - arr.length;
    return [...arr, ...Array(zerosToAdd).fill(0)]
}