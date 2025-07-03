function solution(age) {
    const alpha = 'abcdefghij';
    return age.toString().split('').map(digit => alpha[digit]).join('')
}