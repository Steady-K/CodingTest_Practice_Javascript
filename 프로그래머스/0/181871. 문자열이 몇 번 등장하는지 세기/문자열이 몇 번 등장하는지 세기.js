function solution(myString, pat) {
    let count = 0;
    const L = pat.length;
    
    for (let i = 0; i <= myString.length - L; i++) {
        if (myString.slice(i, i + L) === pat) {
            count++;
        }
    }
    return count;
}