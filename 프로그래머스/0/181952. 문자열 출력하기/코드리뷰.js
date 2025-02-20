const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line]; 
}).on('close', function () {
    let str = input[0];
    console.log(str); 
});

// 주어진 코드에 console.log.(str) 추가하여 문자열 출력 코드를 완성 위 코드는 input 배열에 값을 저장 후 처리 가능한 로직이고
// 다른 사람 코드 중 on('line', console.log); 코드를 사용하여 저장 없이 바로 출력 가능한 코드도 있어 심플한 문제이므로 간결하게 작성하는 것도 좋다고 느낌
// 즉시 출력 코드
const readline = require('readline');
readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', console.log);
