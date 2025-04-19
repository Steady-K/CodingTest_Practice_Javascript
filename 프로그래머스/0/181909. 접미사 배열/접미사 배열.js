function solution(my_string) {
    const suffixes = []
    
    for (let i = 0; i < my_string.length; i++) {
        const suffix = my_string.slice(i)
        
        // console.log(`접미사 [${i}]: ${suffix}`)
        suffixes.push(suffix);
    }
    return suffixes.sort();
}