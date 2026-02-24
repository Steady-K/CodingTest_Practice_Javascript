function solution(num_list) {
    const len = num_list.length;
    let product = 1;
    let sum = 0;
    
    for(let i = 0; i < len; i++) {
        product *= num_list[i]
        sum += num_list[i]
    }
    return product < sum*sum ? 1 : 0  
}