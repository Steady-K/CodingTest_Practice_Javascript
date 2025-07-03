function solution(hp) {
    const major = Math.floor(hp / 5)
    console.log(major)
    const soldier = Math.floor((hp - major * 5) / 3);
    console.log(soldier)
    const worker = hp - (major * 5) - (soldier * 3)
    console.log(worker)
    return major + soldier + worker;
}