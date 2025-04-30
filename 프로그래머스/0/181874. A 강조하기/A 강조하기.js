function solution(myString) {
    return [...myString].map(v => {
        if (v === 'a' || v === 'A') return 'A';
        if (v >= 'A' && v <= 'Z') return v.toLowerCase();
        return v;
    }).join('');
}