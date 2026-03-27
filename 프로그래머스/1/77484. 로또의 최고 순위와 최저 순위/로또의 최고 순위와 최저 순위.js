function solution(lottos, win_nums) {
    const zeroCount = lottos.filter(num => num === 0).length;
    const matchedNum = lottos.filter(num => win_nums.includes(num)).length;

    const getRank = (count) => (count >= 2 ? 7 - count : 6);

    return [getRank(matchedNum + zeroCount), getRank(matchedNum)];
}