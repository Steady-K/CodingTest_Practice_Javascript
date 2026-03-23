function solution(today, terms, privacies) {
    const result = []
    const toDay = (date) => {
        const [y, m, d] = date.split('.').map(Number)
        return  y * 12 * 28 + m * 28 + d
        
    }
    
    const termsMap = {}
    terms.forEach(term => {
        const [type, month] = term.split(' ')
        termsMap[type] = Number(month)
    })
    
    const todayDay = toDay(today)
    
    privacies.forEach((privacy, i) => {
        const [date, type] = privacy.split(' ')
        const expireDay = toDay(date) + termsMap[type] * 28
        
        if (expireDay <= todayDay) {
            result.push(i + 1)
        }
    })
    return result;
}