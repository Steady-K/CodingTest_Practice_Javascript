function solution(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const mid = Math.floor(array.length / 2);
    console.log(mid)
    return sortedArray[mid];
}