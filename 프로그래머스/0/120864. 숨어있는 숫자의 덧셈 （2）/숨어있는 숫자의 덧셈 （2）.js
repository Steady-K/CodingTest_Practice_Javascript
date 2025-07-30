function solution(my_string) {
    const numArr = my_string.match(/\d+/g);
    return numArr ? numArr.map(Number).reduce((acc, cur) => acc + cur, 0) : 0;
}