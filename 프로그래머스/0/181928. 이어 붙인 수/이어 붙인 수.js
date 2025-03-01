function solution(num_list) {
    let OddSum = 0;
    let EvenSum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {
            OddSum += num_list[i].toString();
        } else {
            if (num_list[i] % 2 === 0) {
                EvenSum += num_list[i].toString();
            }
        }
    }
    return Number(OddSum) + Number(EvenSum);
}