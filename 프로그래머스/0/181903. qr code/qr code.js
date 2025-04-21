function solution(q, r, code) {
    const arr = [...code];
    let result = ''
    
    for (let i = 0; i < code.length; i++) {
        if (i % q === r) {
            console.log(arr[i])
            result += arr[i]
        }
    }
    return result;
}