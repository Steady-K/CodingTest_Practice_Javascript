function solution(str1, str2) {
    var answer = '';
    const Arr1 = [...str1];
    const Arr2 = [...str2];
    for (i = 0; i < str1.length; i++) {
       answer += Arr1[i] + Arr2[i];
    }
    return answer;
}