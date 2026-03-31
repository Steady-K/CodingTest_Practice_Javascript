function solution(n) {
    const root = Math.floor(Math.sqrt(n))
    return root * root === n ? (root + 1) ** 2 : -1
}