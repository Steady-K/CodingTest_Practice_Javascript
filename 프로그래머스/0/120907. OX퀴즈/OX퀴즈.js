function solution(quiz) {
    return quiz.map((q) => {
        const [x, operator, y, equal, z] = q.split(' ');
        const left = operator === '+' ? Number(x) + Number(y) : Number(x) - Number(y);
        return left === Number(z) ? 'O' : 'X'
    })
}