function solution(a, b) {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const dayOfWeek = new Date(`2016-${a}-${b}`).getDay();
    console.log(dayOfWeek)
    return days[dayOfWeek]
    
}