function solution(s) {
    const sLen = s.length;
    const odd = Math.floor(sLen / 2);
    const even = sLen / 2;
    return sLen % 2 !== 0 ? s[odd] : s.slice(even - 1, even + 1)
}