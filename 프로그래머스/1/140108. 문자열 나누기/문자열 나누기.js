function solution(s) {
    let result = 0
    let i = 0

    while(i < s.length) {
        const x = s[i]  
        let sameCount = 0
        let diffCount = 0

        while(i < s.length) {
            if(s[i] === x) {
                sameCount++
            } else {
                diffCount++
            }
            i++

            if(sameCount === diffCount) {
                result++
                break 
            }
        }

        if(sameCount !== diffCount) result++
    }

    return result
}