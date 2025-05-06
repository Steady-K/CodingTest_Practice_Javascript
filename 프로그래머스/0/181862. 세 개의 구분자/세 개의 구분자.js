function solution(myStr) {
    myStr = myStr.split(/a|b|c/).filter(Boolean)
    return myStr.length === 0 ? ["EMPTY"] : myStr;
}