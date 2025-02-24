//내가 작성한 코드 : 문자 변환으로 합친 후 숫자로 변경하여 크기 비교하는 if문 사용 Math 함수 생각을 못해따...
	
function solution(a, b) {
    var answer = 0;
    if (Number(a.toString() + b.toString()) >= Number(b.toString() + a.toString())) {
        answer = a.toString() + b.toString()
    } else {
        answer = b.toString() + a.toString()
    }
    return Number(answer);
}







//간단하게 Math 함수와 백틱으로 한 줄 코드...
	
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}

