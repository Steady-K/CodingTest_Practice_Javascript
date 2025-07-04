function solution(hp) {
    const units = [5, 3, 1];
    return units.reduce((count, unit) => {
        const used = Math.floor(hp / unit);
        hp %= unit;
        return count + used
    }, 0)
}