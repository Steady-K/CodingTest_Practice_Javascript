function solution(sides) {
    const asc = sides.sort((a, b) => a - b);
    return asc[0] + asc [1] <= asc[2] ? 2 : 1;
}