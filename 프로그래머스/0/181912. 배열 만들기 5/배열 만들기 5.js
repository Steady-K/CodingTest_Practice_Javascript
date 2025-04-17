function solution(intStrs, k, s, l) {
    const result = []
    
    for (let i = 0; i < intStrs.length; i++) {
        let ret = Number(intStrs[i].slice(s, s + l));
        
        if (ret > k) {
            result.push(ret);
        }
    }
    return result;
}