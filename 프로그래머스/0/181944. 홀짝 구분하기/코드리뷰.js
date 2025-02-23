// 내가 작성한 코드 if문으로 작성
	
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    if (n % 2 === 1) {
        n = `${n} is odd`
    } else {
        n = `${n} is even`
    }
    console.log(n);
});

// 다른 사람들이 작성한 코드 삼항연산자 사
	
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const result = Number(line) % 2 ? 'odd' : 'even'
    console.log(line, 'is', result)
})

