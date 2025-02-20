// 나의 풀이

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
    let arr = [];

    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            arr.push(str[i].toLowerCase()); 
        } else {
            arr.push(str[i].toUpperCase());
        }
    }
    console.log(arr.join(""))
});

// 새로운 배열을 정의하고 for문과 if문을 통해 str의 각 문자를 배열에 넣어 비교 후 변환 출력을 했으나, 비효율적이라는 생각이 들어 다른 사람 코드 보기로함


// 다른 사람 코드

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = [...line];
}).on('close', () => {
  console.log(
    input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),
  );
});

// map(), [a-z].test()을 사용하여 한 줄로 간단하게 코드 작성
// [a-z] 소문자인지 테스트 후 소문자면 toUpperCase(), 아니면 toLowerCase()로 변환후 join() 함수로 합



