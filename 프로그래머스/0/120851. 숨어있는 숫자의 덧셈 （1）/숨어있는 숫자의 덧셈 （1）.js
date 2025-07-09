function solution(my_string) {
    const numArray = [...my_string].filter(ch => /\d/.test(ch)).map(Number)
    return numArray.reduce((acc, cur) => acc + cur, 0)
}