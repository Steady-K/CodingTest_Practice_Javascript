function solution(myString) {
    return [...myString].map(a => a < "l" ? a = "l" : a).join('')
}