function solution(my_string) {
    const tokens = my_string.split(' ');
    return tokens.reduce((acc, cur, i) => {
        if(cur === "+") acc += Number(tokens[i + 1]);
        if(cur === '-') acc -= Number(tokens[i + 1]);
        return acc;
    }, Number(tokens[0]));
}