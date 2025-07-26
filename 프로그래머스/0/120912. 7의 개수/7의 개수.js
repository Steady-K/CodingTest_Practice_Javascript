function solution(array) {
    return array.join('').split('').filter(ch => ch === '7').length
}