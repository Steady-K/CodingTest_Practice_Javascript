// 제가 작성한 코드는 for in 루프문으로 작성했습니다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for (let i in str) {
        console.log(str[i]);
    }
});

//다른 사람의 풀이 (1) forEach() 사용
	
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    [...str].forEach(c => console.log(c))
});

//다른 사람의 풀이 (2) join() 사용
	
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = [...line];
}).on('close', () => {
  console.log(input.join('\n'));
});



