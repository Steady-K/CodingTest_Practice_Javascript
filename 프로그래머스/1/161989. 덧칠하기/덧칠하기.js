function solution(n, m, section) {
    let count = 0
    let cover = 0
    
    section.forEach(e => {
        if(e > cover) {
            count++
            cover = e + m - 1
        } 
    })
    return count
}