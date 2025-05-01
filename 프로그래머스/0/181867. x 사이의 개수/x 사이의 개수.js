function solution(myString) {
    const strArr = myString.split('x');
    return strArr.map((_, i) => strArr[i].length)
}