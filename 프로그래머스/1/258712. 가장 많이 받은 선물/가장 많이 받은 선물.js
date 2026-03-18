function solution(friends, gifts) {
    const n = friends.length
    
    const index = {}
    friends.forEach((name, i) => index[name] = i)
    
    const giftMap = Array.from({length : n}, () => Array(n).fill(0))
    
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(' ')
        giftMap[index[giver]][index[receiver]]++
    })
    
    const giftScore = Array(n).fill(0)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            giftScore[i] += giftMap[i][j]
            giftScore[i] -= giftMap[j][i]
        }
    }
    
    const nextGift = Array(n).fill(0)
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            const given = giftMap[i][j]
            const received = giftMap[j][i]
            
            if(given > received) {
                nextGift[i]++
            } else if (given < received) {
                nextGift[j]++
            } else {
                if(giftScore[i] > giftScore[j]) {
                    nextGift[i]++
                } else if (giftScore[i] < giftScore[j])
                    nextGift[j]++
            }
        }
    }
    return Math.max(...nextGift)
}