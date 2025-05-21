function solution(rank, attendance) {
    const students = rank.map((r, i) => ({
        index: i,
        rank: r,
        canAttend: attendance[i]
    }))
    
    students.sort((a, b) => a.rank - b.rank);
    
    const top3 = students.filter(s => s.canAttend).slice(0, 3);
    const [a, b, c] = top3.map(s => s.index);
    
    return 10000 * a + 100 * b + c;
}