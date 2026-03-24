function solution(ingredient) {
    const burger = []
    let count = 0
    
    ingredient.forEach(e => {
        burger.push(e)
        
        if(burger.length >= 4) {
            const top4 = burger.slice(-4)
            
            if(top4.join('') === '1231') {
                burger.splice(-4)
                count++
            }
        }
    })
    return count
}