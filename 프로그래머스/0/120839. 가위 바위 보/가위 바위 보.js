function solution(rsp) {
    const wins = {2: 0, 0: 5, 5: 2};
    return rsp.split('').map(e => wins[e]).join('');
}