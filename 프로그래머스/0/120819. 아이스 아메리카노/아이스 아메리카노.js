function solution(money) {
    const count = Math.floor(money / 5500)
    return [count, money - 5500 * count]
    
}