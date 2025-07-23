function solution(num, k) {
    const strNum = num.toString();
    const idx = strNum.indexOf(k.toString());
    
    return idx === -1 ? -1 : idx + 1;
}