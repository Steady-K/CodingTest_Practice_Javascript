function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

    const answer = [];
    let cur = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= cur) {
            count++;
        } else {
            answer.push(count);
            cur = days[i];
            count = 1;
        }
    }
    answer.push(count);

    return answer;
}
