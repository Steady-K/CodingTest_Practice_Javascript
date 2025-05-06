function solution(arr, flag) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i] === true) {
            for (let j = 0; j < arr[i] * 2; j++) {
                result.push(arr[i]);
            }
        } else if (flag[i] === false) {
            result.splice(-arr[i], arr[i]);
        }
      }
    return result;
}
    
