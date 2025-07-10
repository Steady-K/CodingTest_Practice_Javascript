function solution(my_string) {
    const arr = [...my_string];
    const uniqueArr = [];
    
    arr.forEach(el => {
        if (!uniqueArr.includes(el)) {
            uniqueArr.push(el)
        }
    })
    return uniqueArr.join('')
}