function solution(n) {
    let synCnt = 0;
    for(let i = 4; i <= n; i++) {
        let cnt = 0;
        for(let j = 1; j <= n; j++) {
            if(i % j === 0) {
                cnt += 1;
            }
            if(cnt >= 3) {
                synCnt += 1;
                break;
            }
        }
    }
    return synCnt;
}