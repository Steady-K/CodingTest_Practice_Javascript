const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    console.log('a =', a);
    console.log('b =', b);
});

// 주어진 코드에서 console.log 안의 값만 바꾸면 가능한 문제를 새로운 a, b 변수를 추가해서 출력하는 비효율적인 방법으로 문제를 풀이했습니다.

수정 후

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${input[0]}\nb = ${input[1]}`);
});
