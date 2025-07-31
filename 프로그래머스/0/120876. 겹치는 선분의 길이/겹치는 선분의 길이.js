function solution(lines) {
    const arr = Array(201).fill(0);
    
    for(let [start, end] of lines) {
        for(let i = start + 100 ; i < end + 100; i++) {
         arr[i]++;   
        }
    }
    return arr.filter(v => v >= 2).length;
}