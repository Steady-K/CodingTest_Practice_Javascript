function solution(my_string, m, c) {
    const arr = [...my_string]
    let result = ''
    
    for (let i = 0; i < my_string.length; i++) {
        if (m * i < my_string.length) {
          result += arr[m * i + c - 1]
        }
    }
    return result;
}