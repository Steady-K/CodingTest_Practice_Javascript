function solution(keymap, targets) {
    const result = []
    
    targets.forEach((target) => {
        let totalPush = 0;
        let possible = true;
        
        for (let i = 0; i < target.length; i++) {
            const char = target[i]
            let minPush = Infinity
            
            keymap.forEach((key) => {
                const idx = key.indexOf(char)
                if(idx !== -1) {
                    minPush = Math.min(minPush, idx + 1)
                }
            })
            
            if(minPush === Infinity) {
                possible = false
                break
            }
            totalPush += minPush
        }
        result.push(possible ? totalPush : -1)
    })
    return result
}