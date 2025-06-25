function solution(num_list) {
    let oddCount = 0;
    let evenCount = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }
    return [evenCount, oddCount];
}