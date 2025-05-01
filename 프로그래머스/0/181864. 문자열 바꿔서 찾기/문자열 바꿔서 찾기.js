function solution(myString, pat) {
    const change = [...myString].map((char) => {
        if (char === 'A') return 'B';
        if (char === 'B') return 'A';
        return char;
    }).join('')
    
    return change.includes(pat) ? 1 : 0;
}