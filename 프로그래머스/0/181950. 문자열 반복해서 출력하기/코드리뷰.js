const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
});

// 간단하게 repeat() 함수를 이용하여 반복된 문자열를 출력
// 반복문으로도 반복 문자열 출력 가능

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    for (let i = 0; i < n; i += 1;) {
      str += input[0]
    }
    console.log(str)
});

