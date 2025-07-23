function solution(n) {
    const strN = n.toString();
    let result = 0;
    for(let i = 0; i < strN.length; i++) {
        
        result += Number(strN[i]);
    }
    return result;
}