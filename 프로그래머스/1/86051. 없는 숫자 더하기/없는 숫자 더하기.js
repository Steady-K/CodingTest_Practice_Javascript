function solution(numbers) {
    let s = "0123456789"
    let result = 0
    
    for(let i = 0; i < numbers.length; i++) {
        if(s.includes(numbers[i])) {
           s = s.replace(String(numbers[i]), "")
        }
    }
    return [...s].map(Number).reduce((sum, cur) => sum + cur, 0)
}