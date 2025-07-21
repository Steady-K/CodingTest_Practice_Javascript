function solution(order) {
    return [...order.toString()].reduce((acc, cur) => {
        return ['3', '6', '9'].includes(cur) ? acc + 1 : acc
    }, 0)
}