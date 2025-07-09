function solution(my_string) {
    return [...my_string].filter(ch => /\d/.test(ch)).map(Number).sort((a, b) => a - b)
}