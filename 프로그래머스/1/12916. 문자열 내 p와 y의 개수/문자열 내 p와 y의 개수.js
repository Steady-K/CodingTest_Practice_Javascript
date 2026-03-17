function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    const upperStr = s.toUpperCase()
    const pCount = [...upperStr].filter(e => e === "P").length
    const yCount = [...upperStr].filter(e => e === "Y").length
    
    return pCount === yCount ? true : false
}