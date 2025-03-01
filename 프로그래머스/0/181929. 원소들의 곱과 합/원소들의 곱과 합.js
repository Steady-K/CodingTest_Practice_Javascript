function solution(num_list) {
    let times = 1;
    let sum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        times *= num_list[i];
        sum += num_list[i]
    }
    if (times < sum**2) {
        return 1;
    } else {
        if (times > sum**2) {
            return 0;
        }
    }
}