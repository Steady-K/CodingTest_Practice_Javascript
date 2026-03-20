function solution(cards1, cards2, goal) {
    let p1 = 0
    let p2 = 0
    
    for (const word of goal) {
        if(cards1[p1] === word && p1 < cards1.length) {
            p1++
        } else if (cards2[p2] === word && p2 < cards2.length) {
            p2++
        } else {
            return "No"
        }
    }
    return "Yes"
}