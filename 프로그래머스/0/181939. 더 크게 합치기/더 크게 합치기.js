function solution(a, b) {
    var answer = 0;
    if (Number(a.toString() + b.toString()) >= Number(b.toString() + a.toString())) {
        answer = a.toString() + b.toString()
    } else {
        answer = b.toString() + a.toString()
    }
    return Number(answer);
}