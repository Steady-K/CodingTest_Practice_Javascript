function solution(num_list) {
    const numLen = num_list.length;
    let onlyOddNum = ''
    let onlyEvenNum = ''
    for(let i = 0; i < numLen; i++) {
        if(num_list[i] % 2 !== 0) {
            onlyOddNum += `${num_list[i]}`
        } else {
            onlyEvenNum += `${num_list[i]}`
        }
    }
    return Number(onlyOddNum) + Number(onlyEvenNum)
}