function solution(num_list) {
    
    let last = num_list[num_list.length - 1];
    let secondLast = num_list[num_list.length - 2];
    
    let result1 = last - secondLast;
    let result2 = last*2
    
    if (last > secondLast) {
         num_list.push(result1);
    } else {
         num_list.push(result2);
    }
     return num_list;
}
   
    